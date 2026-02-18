"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import "./BlogsInner.scss";
import { motion, AnimatePresence } from "framer-motion";


const BlogsInner = ({ blog }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isSupported, setIsSupported] = useState(true);
  const [error, setError] = useState(null);
  const utteranceRef = useRef(null);
  const progressIntervalRef = useRef(null);
  const fullTextRef = useRef("");

  // Collect all text content for audio
  const getFullText = () => {
    if (fullTextRef.current) return fullTextRef.current;
    
    let fullText = blog.intro + ". ";
    
    blog.sections.forEach((section, index) => {
      fullText += `Section ${index + 1}. ${section.title}. `;
      section.paragraphs.forEach((para) => {
        if (para?.bold) fullText += para.bold + " ";
        if (para?.text) fullText += para.text + " ";
      });
    });
    
    fullTextRef.current = fullText;
    return fullText;
  };

  // Check browser support and preload voices
  useEffect(() => {
    // Check if Speech Synthesis is supported
    if (!('speechSynthesis' in window)) {
      setIsSupported(false);
      setError('Speech synthesis is not supported in your browser');
      return;
    }

    let voicesLoaded = false;

    const loadVoices = () => {
      const voices = window.speechSynthesis.getVoices();
      console.log('Available voices:', voices.length);
      
      if (voices.length > 0 && !voicesLoaded) {
        voicesLoaded = true;
        setIsSupported(true);
        setError(null);
        // Preload text
        getFullText();
      } else if (voices.length === 0) {
        // Some browsers might not have voices loaded yet
        console.warn('No voices available yet');
      }
    };

    // Load voices immediately
    loadVoices();
    
    // Handle voices changed event
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }

    // Fallback: If voices don't load after 2 seconds, try again
    const fallbackTimer = setTimeout(() => {
      const voices = window.speechSynthesis.getVoices();
      if (voices.length === 0) {
        console.error('No voices loaded after timeout');
        setError('Unable to load speech voices. Please try refreshing the page.');
        setIsSupported(false);
      }
    }, 2000);

    return () => {
      clearTimeout(fallbackTimer);
      window.speechSynthesis.cancel();
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
    };
  }, []);

  const handlePlayPause = () => {
    // Check support before playing
    if (!isSupported || !('speechSynthesis' in window)) {
      setError('Speech synthesis is not available');
      return;
    }

    if (!isPlaying) {
      setIsLoading(true);
      setIsPlaying(true);
      setError(null);
      
      // Cancel any existing speech
      window.speechSynthesis.cancel();
      
      setTimeout(() => {
        try {
          const text = getFullText();
          
          if (!text || text.trim().length === 0) {
            throw new Error('No text content available');
          }

          const utterance = new SpeechSynthesisUtterance(text);
          
          // Get available voices
          const voices = window.speechSynthesis.getVoices();
          console.log('Using voices:', voices.length);
          
          if (voices.length === 0) {
            throw new Error('No speech voices available');
          }

          // Try to find the best voice
          const preferredVoice = 
            voices.find(voice => voice.lang.startsWith('en-US') && voice.name.includes('Google')) ||
            voices.find(voice => voice.lang.startsWith('en-US')) ||
            voices.find(voice => voice.lang.startsWith('en-GB')) ||
            voices.find(voice => voice.lang.startsWith('en')) ||
            voices[0];
          
          if (preferredVoice) {
            utterance.voice = preferredVoice;
            console.log('Selected voice:', preferredVoice.name);
          }
          
          // Configure voice settings
          utterance.rate = 1;
          utterance.pitch = 1;
          utterance.volume = 1;
          utterance.lang = 'en-US';
          
          // Estimate duration
          const wordCount = text.split(' ').length;
          const estimatedDuration = (wordCount / 150) * 60;
          setDuration(estimatedDuration);
          
          utterance.onstart = () => {
            console.log('Speech started');
            setIsLoading(false);
            setError(null);
            const startTime = Date.now();
            progressIntervalRef.current = setInterval(() => {
              const elapsed = (Date.now() - startTime) / 1000;
              setCurrentTime(elapsed);
              const newProgress = (elapsed / estimatedDuration) * 100;
              setProgress(Math.min(newProgress, 100));
              
              if (elapsed >= estimatedDuration) {
                clearInterval(progressIntervalRef.current);
              }
            }, 100);
          };

          utterance.onend = () => {
            console.log('Speech ended');
            setIsPlaying(false);
            setIsLoading(false);
            setProgress(0);
            setCurrentTime(0);
            if (progressIntervalRef.current) {
              clearInterval(progressIntervalRef.current);
            }
          };

          utterance.onerror = (event) => {
            console.error('Speech synthesis error:', event);
            setIsPlaying(false);
            setIsLoading(false);
            setProgress(0);
            setCurrentTime(0);
            
            // Provide user-friendly error messages
            let errorMessage = 'Unable to play audio';
            if (event.error === 'not-allowed') {
              errorMessage = 'Audio playback not allowed. Please interact with the page first.';
            } else if (event.error === 'network') {
              errorMessage = 'Network error occurred';
            } else if (event.error === 'synthesis-unavailable') {
              errorMessage = 'Speech synthesis unavailable';
            }
            
            setError(errorMessage);
            
            if (progressIntervalRef.current) {
              clearInterval(progressIntervalRef.current);
            }
          };

          utteranceRef.current = utterance;
          
          // Speak the utterance
          window.speechSynthesis.speak(utterance);
          
        } catch (err) {
          console.error('Error creating speech:', err);
          setIsPlaying(false);
          setIsLoading(false);
          setError(err.message || 'Failed to initialize audio');
        }
      }, 50);
      
    } else {
      // Stop speech
      window.speechSynthesis.cancel();
      setIsPlaying(false);
      setIsLoading(false);
      setProgress(0);
      setCurrentTime(0);
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
    }
  };
  // const [isPlaying, setIsPlaying] = useState(false);
  // const [progress, setProgress] = useState(0);
  // const [duration, setDuration] = useState(0);
  // const [currentTime, setCurrentTime] = useState(0);
  // const utteranceRef = useRef(null);
  // const progressIntervalRef = useRef(null);

  // // Collect all text content for audio
  // const getFullText = () => {
  //   let fullText = blog.intro + ". ";
    
  //   blog.sections.forEach((section, index) => {
  //     fullText += `Section ${index + 1}. ${section.title}. `;
  //     section.paragraphs.forEach((para) => {
  //       if (para?.bold) fullText += para.bold + " ";
  //       if (para?.text) fullText += para.text + " ";
  //     });
  //   });
    
  //   return fullText;
  // };

  // const handlePlayPause = () => {
  //   if (!isPlaying) {
  //     // Start speech
  //     const text = getFullText();
  //     const utterance = new SpeechSynthesisUtterance(text);
      
  //     // Configure voice settings
  //     utterance.rate = 1; // Speed (0.1 to 10)
  //     utterance.pitch = 1; // Pitch (0 to 2)
  //     utterance.volume = 1; // Volume (0 to 1)
      
  //     // Estimate duration (rough calculation: ~150 words per minute)
  //     const wordCount = text.split(' ').length;
  //     const estimatedDuration = (wordCount / 150) * 60; // in seconds
  //     setDuration(estimatedDuration);
      
  //     utterance.onstart = () => {
  //       setIsPlaying(true);
  //       // Start progress simulation
  //       const startTime = Date.now();
  //       progressIntervalRef.current = setInterval(() => {
  //         const elapsed = (Date.now() - startTime) / 1000;
  //         setCurrentTime(elapsed);
  //         setProgress((elapsed / estimatedDuration) * 100);
  //       }, 100);
  //     };

  //     utterance.onend = () => {
  //       setIsPlaying(false);
  //       setProgress(0);
  //       setCurrentTime(0);
  //       if (progressIntervalRef.current) {
  //         clearInterval(progressIntervalRef.current);
  //       }
  //     };

  //     utterance.onerror = () => {
  //       setIsPlaying(false);
  //       setProgress(0);
  //       setCurrentTime(0);
  //       if (progressIntervalRef.current) {
  //         clearInterval(progressIntervalRef.current);
  //       }
  //     };

  //     utteranceRef.current = utterance;
  //     window.speechSynthesis.speak(utterance);
  //   } else {
  //     // Pause/Stop speech
  //     window.speechSynthesis.cancel();
  //     setIsPlaying(false);
  //     setProgress(0);
  //     setCurrentTime(0);
  //     if (progressIntervalRef.current) {
  //       clearInterval(progressIntervalRef.current);
  //     }
  //   }
  // };

  // // Cleanup on unmount
  // useEffect(() => {
  //   return () => {
  //     window.speechSynthesis.cancel();
  //     if (progressIntervalRef.current) {
  //       clearInterval(progressIntervalRef.current);
  //     }
  //   };
  // }, []);
  return (
    <section className="blogsInner">
      <div className="blogsInner__container">
        {/* Audio Player */}
        <div className="blogsInner__audioPlayer">
          <h3 className="blogsInner__audioTitle">Listen to audio version of this blog</h3>
          
          <div className="blogsInner__audioControls">
            <button 
              className="blogsInner__playButton"
              onClick={handlePlayPause}
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <rect x="6" y="4" width="4" height="16" fill="currentColor" rx="1"/>
                  <rect x="14" y="4" width="4" height="16" fill="currentColor" rx="1"/>
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M8 5v14l11-7L8 5z" fill="currentColor"/>
                </svg>
              )}
            </button>

            <div className="blogsInner__progressContainer">
              <div className="blogsInner__progressBar">
                <div 
                  className="blogsInner__progressFill"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>
        </div>
        {/*  */}

        <div className="blogsInner__intro">
          <p className="blogsInner__introText">
            {blog.intro}
          </p>
        </div>

        <div className="blogsInner__content">
          {blog.sections.map((section, index) => (
            <div className="blogsInner__section" key={index}>
              <motion.h2 
              initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0 }}
          viewport={{ once: true }}
              className="blogsInner__heading">
                {index + 1}. {section.title}
              </motion.h2>

              {/* {section.paragraphs.map((para, i) => (
                <p className="blogsInner__paragraph" key={i}>
                  {para}
                </p>
              ))} */}
              {section.paragraphs.map((para, i) => {
                if (!para?.text) return null;

                return (
                  <p className="blogsInner__paragraph" key={i}>
                    {para.bold && (
                      <p className="blogsInner__bold">
                        {para.bold}{" "}
                      </p>
                    )}

                    {para.text.split("\n").map((line, idx) => (
                      <span key={idx} className="blogsInner__boldspan">
                        {line}
                        <br />
                      </span>
                    ))}
                  </p>
                );
              })}

              {section.image && (
                <div className="blogsInner__imageWrap">
                  <Image
                    src={section.image}
                    alt={section.title}
                    width={500}
                    height={500}
                    className="blogsInner__image"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogsInner;
