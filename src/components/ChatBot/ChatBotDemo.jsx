"use client";

import { useState, useRef, useEffect } from "react";
import "./ChatBot.scss";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi there! 👋 How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [hasGreeted, setHasGreeted] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-open chatbot after 3 seconds on first visit
  useEffect(() => {
    const hasVisited = localStorage.getItem("chatbot_visited");
    
    if (!hasVisited) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        setHasGreeted(true);
        localStorage.setItem("chatbot_visited", "true");
      }, 3000); // Opens after 3 seconds

      return () => clearTimeout(timer);
    }
  }, []);

  // Scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage = {
      id: Date.now(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate bot response (replace with actual API call)
    setTimeout(() => {
      const botResponse = getBotResponse(inputValue.toLowerCase());
      const botMessage = {
        id: Date.now() + 1,
        text: botResponse,
        sender: "bot",
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  // Simple bot responses (replace with actual AI/backend logic)
  const getBotResponse = (userInput) => {
    const responses = {
      hello: "Hello! How can I assist you today?",
      hi: "Hi there! What can I do for you?",
      help: "I'm here to help! You can ask me about our services, pricing, or anything else.",
      services: "We offer Interior Designing, Architectural Planning, and 3D Visualization services. Which one interests you?",
      pricing: "Our pricing varies based on project requirements. Would you like to schedule a consultation?",
      contact: "You can reach us at contact@example.com or call us at +1234567890.",
      thanks: "You're welcome! Is there anything else I can help you with?",
      bye: "Goodbye! Feel free to reach out anytime. Have a great day! 👋",
    };

    // Check for keywords
    for (const [key, response] of Object.entries(responses)) {
      if (userInput.includes(key)) {
        return response;
      }
    }

    // Default response
    return "I'm not sure I understand. Can you please rephrase? You can ask me about our services, pricing, or how to contact us.";
  };

  return (
    <>
      {/* Chat Button */}
      <button
        className={`chatbot__trigger ${isOpen ? "is-hidden" : ""}`}
        onClick={toggleChat}
        aria-label="Open chat"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"
            fill="currentColor"
          />
        </svg>
        {!hasGreeted && <span className="chatbot__badge">1</span>}
      </button>

      {/* Chat Window */}
      <div className={`chatbot__window ${isOpen ? "is-open" : ""}`}>
        {/* Header */}
        <div className="chatbot__header">
          <div className="chatbot__header-info">
            <div className="chatbot__avatar">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <div className="chatbot__header-text">
              <h3 className="chatbot__title">Chat Support</h3>
              <p className="chatbot__status">
                <span className="chatbot__status-dot"></span>
                Online
              </p>
            </div>
          </div>
          <button
            className="chatbot__close"
            onClick={toggleChat}
            aria-label="Close chat"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M15 5L5 15M5 5l10 10"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {/* Messages */}
        <div className="chatbot__messages">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`chatbot__message ${
                message.sender === "bot"
                  ? "chatbot__message--bot"
                  : "chatbot__message--user"
              }`}
            >
              {message.sender === "bot" && (
                <div className="chatbot__message-avatar">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              )}
              <div className="chatbot__message-content">
                <p className="chatbot__message-text">{message.text}</p>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="chatbot__message chatbot__message--bot">
              <div className="chatbot__message-avatar">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div className="chatbot__message-content">
                <div className="chatbot__typing">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <form className="chatbot__input-form" onSubmit={handleSendMessage}>
          <input
            ref={inputRef}
            type="text"
            className="chatbot__input"
            placeholder="Type your message..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button
            type="submit"
            className="chatbot__send"
            aria-label="Send message"
            disabled={!inputValue.trim()}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M2 10l16-8-8 16-2-8-6-2z"
                fill="currentColor"
              />
            </svg>
          </button>
        </form>
      </div>
    </>
  );
};

export default ChatBot;