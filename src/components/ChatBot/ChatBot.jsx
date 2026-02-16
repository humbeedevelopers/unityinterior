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
    const [showQuickReplies, setShowQuickReplies] = useState(true);
    const messagesEndRef = useRef(null);
    const inputRef = useRef(null);

    // Quick reply options
    const quickReplies = [
        { id: 1, text: "Our Services", keyword: "services" },
        { id: 2, text: "Pricing Info", keyword: "pricing" },
        { id: 3, text: "Contact Us", keyword: "contact" },
        { id: 4, text: "Portfolio", keyword: "portfolio" },
    ];

    // Auto-open chatbot after 3 seconds on first visit
    useEffect(() => {
        const hasVisited = localStorage.getItem("chatbot_visited");

        if (!hasVisited) {
            const timer = setTimeout(() => {
                setIsOpen(true);
                setHasGreeted(true);
                localStorage.setItem("chatbot_visited", "true");
            }, 3000);

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

    const handleQuickReply = (keyword) => {
        setInputValue(keyword);
        handleSendMessage(null, keyword);
        setShowQuickReplies(false);
    };

    const handleSendMessage = async (e, quickReplyText = null) => {
        if (e) e.preventDefault();

        const messageText = quickReplyText || inputValue;
        if (!messageText.trim()) return;

        // Add user message
        const userMessage = {
            id: Date.now(),
            text: messageText,
            sender: "user",
            timestamp: new Date(),
        };

        setMessages((prev) => [...prev, userMessage]);
        setInputValue("");
        setIsTyping(true);
        setShowQuickReplies(false);

        // Simulate bot thinking time
        setTimeout(() => {
            const botResponse = getBotResponse(messageText.toLowerCase());
            const botMessage = {
                id: Date.now() + 1,
                text: botResponse.text,
                sender: "bot",
                timestamp: new Date(),
                suggestions: botResponse.suggestions,
            };

            setMessages((prev) => [...prev, botMessage]);
            setIsTyping(false);
        }, 1000 + Math.random() * 500); // Random delay between 1-1.5s for realism
    };

    // Comprehensive bot responses
    const getBotResponse = (userInput) => {
        // Greeting responses
        if (userInput.match(/^(hi|hello|hey|good morning|good afternoon|good evening)/i)) {
            return {
                text: "Hello! Welcome to our interior design studio. I'm here to help you transform your space. What would you like to know about?",
                suggestions: ["Our Services", "View Portfolio", "Get Quote"],
            };
        }

        // Services related
        if (userInput.includes("service") || userInput.includes("what do you do") || userInput.includes("offer")) {
            return {
                text: "We offer three core services:\n\n🏠 **Interior Designing** - Complete home and office interior solutions with personalized designs\n\n🏗️ **Architectural Planning** - Comprehensive architectural planning and space optimization\n\n🎨 **3D Visualization** - Photorealistic 3D renders to help you visualize your dream space before execution\n\nWhich service interests you the most?",
                suggestions: ["Interior Designing", "Architectural Planning", "3D Visualization"],
            };
        }

        // Interior Designing
        if (userInput.includes("interior") && userInput.includes("design")) {
            return {
                text: "Our Interior Designing service includes:\n\n✨ Customized design concepts\n✨ Space planning and layout\n✨ Color schemes and material selection\n✨ Furniture and decor recommendations\n✨ Lighting design\n✨ Project execution and supervision\n\nWe handle both residential and commercial projects. Would you like to know about our design process or see our portfolio?",
                suggestions: ["Design Process", "View Portfolio", "Get Quote"],
            };
        }

        // Architectural Planning
        if (userInput.includes("architect") || userInput.includes("planning")) {
            return {
                text: "Our Architectural Planning service covers:\n\n📐 Site analysis and feasibility studies\n📐 Conceptual design and master planning\n📐 Detailed architectural drawings\n📐 Building permit documentation\n📐 Structural coordination\n📐 Construction documentation\n\nWe ensure your project is both aesthetically pleasing and structurally sound. Interested in starting a project?",
                suggestions: ["Project Timeline", "Required Documents", "Get Consultation"],
            };
        }

        // 3D Visualization
        if (userInput.includes("3d") || userInput.includes("visualiz") || userInput.includes("render")) {
            return {
                text: "Our 3D Visualization service provides:\n\n🎬 Photorealistic 3D renderings\n🎬 Virtual walkthroughs\n🎬 Multiple design options\n🎬 Material and color variations\n🎬 Day and night lighting scenarios\n🎬 VR-ready models (optional)\n\nSee your space before it's built! Would you like to see samples or discuss your project?",
                suggestions: ["View Samples", "Pricing Info", "Start Project"],
            };
        }

        // Pricing related
        if (userInput.includes("price") || userInput.includes("cost") || userInput.includes("budget") || userInput.includes("fee") || userInput.includes("charge")) {
            return {
                text: "Our pricing is customized based on:\n\n💰 Project scope and size\n💰 Service type (design, planning, or visualization)\n💰 Timeline requirements\n💰 Complexity and detail level\n\n**Typical ranges:**\n• Interior Design: ₹150-400 per sq.ft\n• Architectural Planning: ₹50-150 per sq.ft\n• 3D Visualization: ₹5,000-25,000 per render\n\nFor an accurate quote tailored to your needs, I'd recommend scheduling a free consultation. Would you like me to help with that?",
                suggestions: ["Free Consultation", "Payment Plans", "Contact Details"],
            };
        }

        // Process/Timeline
        if (userInput.includes("process") || userInput.includes("timeline") || userInput.includes("how long") || userInput.includes("duration")) {
            return {
                text: "Our typical project process:\n\n📅 **Week 1-2**: Initial consultation & site visit\n📅 **Week 2-3**: Concept development & presentations\n📅 **Week 3-4**: Design refinement & approvals\n📅 **Week 4+**: Execution & project management\n\nTimeline varies based on project size:\n• Small rooms: 2-4 weeks\n• Full apartments: 1-3 months\n• Villas/Large spaces: 3-6 months\n\nWould you like to discuss your specific project timeline?",
                suggestions: ["Start Consultation", "Our Portfolio", "FAQs"],
            };
        }

        // Portfolio
        if (userInput.includes("portfolio") || userInput.includes("work") || userInput.includes("project") || userInput.includes("example")) {
            return {
                text: "I'd love to show you our work! 🎨\n\nOur portfolio includes:\n• Luxury residences\n• Modern apartments\n• Commercial spaces\n• Boutique hotels\n• Restaurant & café designs\n\nYou can view our complete portfolio on our website's Projects section, or I can share specific category links. Which type of project interests you most?",
                suggestions: ["Residential", "Commercial", "Contact for Details"],
            };
        }

        // Contact information
        if (userInput.includes("contact") || userInput.includes("phone") || userInput.includes("email") || userInput.includes("address") || userInput.includes("reach")) {
            return {
                text: "📞 **Get in Touch:**\n\n📧 Email: info@unityinteriors.com\n📱 Phone: +91 7405169196\n📍 Address: Ahmedabad, Gujarat, India\n\n🕐 **Business Hours:**\nMon-Sat: 10:00 AM - 7:00 PM\nSun: By appointment only\n\nWould you like to schedule a consultation or visit our studio?",
                suggestions: ["Schedule Visit", "Send Email", "WhatsApp Us"],
            };
        }

        // Consultation/Meeting
        if (userInput.includes("consult") || userInput.includes("meeting") || userInput.includes("appointment") || userInput.includes("visit") || userInput.includes("schedule")) {
            return {
                text: "Great! I'd love to help you schedule a consultation. 📅\n\n**Free Consultation includes:**\n✓ Discussion of your requirements\n✓ Site visit (if needed)\n✓ Preliminary design ideas\n✓ Budget estimation\n✓ Timeline overview\n\nPlease share your:\n1. Preferred date/time\n2. Project type (residential/commercial)\n3. Location\n4. Contact number\n\nOr you can call us directly at +91 98765 43210",
                suggestions: ["Call Now", "Send Details", "View Calendar"],
            };
        }

        // Location/Service Area
        if (userInput.includes("location") || userInput.includes("where") || userInput.includes("area") || userInput.includes("city")) {
            return {
                text: "📍 We're based in **Ahmedabad, Gujarat** and serve:\n\n✓ surrounding areas\n✓ Ahmedabad\n✓ Vadodara\n✓ Rajkot\n✓ Mumbai (select projects)\n\nFor projects outside these areas, we offer remote consultation and design services with local execution partners. Where is your project located?",
                suggestions: ["My Location", "Remote Service", "Contact Us"],
            };
        }

        // Payment/Payment Plans
        if (userInput.includes("payment") || userInput.includes("installment") || userInput.includes("advance")) {
            return {
                text: "💳 **Payment Structure:**\n\n**Design Phase:**\n• 30% - Project commencement\n• 40% - Concept approval\n• 30% - Final delivery\n\n**Execution Phase:**\n• Milestone-based payments\n• Flexible installment options available\n• Multiple payment methods accepted\n\nWe also offer:\n✓ EMI options (for large projects)\n✓ Stage-wise payment plans\n✓ Transparent billing\n\nWould you like detailed payment terms for your specific project?",
                suggestions: ["Get Quote", "EMI Options", "Contact Finance"],
            };
        }

        // Materials/Vendors
        if (userInput.includes("material") || userInput.includes("vendor") || userInput.includes("supplier") || userInput.includes("quality")) {
            return {
                text: "🏆 **Quality Materials:**\n\nWe work with premium brands:\n• Modular furniture: Hafele, Hettich\n• Flooring: Kajaria, Somany\n• Lighting: Philips, Havells\n• Sanitaryware: Kohler, Jaquar\n• Paints: Asian Paints, Dulux\n\n✓ Direct vendor partnerships\n✓ Best price guarantee\n✓ Quality assurance\n✓ Warranty support\n\nYou can also provide your preferred vendors. Want to discuss material options for your project?",
                suggestions: ["Material Catalog", "Get Quote", "Custom Options"],
            };
        }

        // Warranty/After Service
        if (userInput.includes("warrant") || userInput.includes("after") || userInput.includes("maintenance") || userInput.includes("support")) {
            return {
                text: "🛡️ **After-Sales Support:**\n\n✓ 1-year warranty on workmanship\n✓ Vendor warranties on materials\n✓ Free maintenance visit (first 3 months)\n✓ 24/7 emergency support\n✓ Annual maintenance contracts available\n\nWe stand behind our work and ensure your space remains beautiful for years to come. Any specific concerns?",
                suggestions: ["Warranty Details", "Maintenance Plan", "Contact Support"],
            };
        }

        // Testimonials/Reviews
        if (userInput.includes("review") || userInput.includes("testimonial") || userInput.includes("feedback") || userInput.includes("client")) {
            return {
                text: "⭐ **Client Testimonials:**\n\nWe're proud to have 100+ satisfied clients with a 4.9/5 rating!\n\n\"Exceptional design quality and professional execution\" - Mr. Sharma\n\n\"Transformed our home beyond expectations\" - Mrs. Patel\n\n\"Great attention to detail and timely delivery\" - Raj Enterprises\n\nYou can read more reviews on our website or Google Business page. Want to speak with our past clients?",
                suggestions: ["View All Reviews", "Client References", "Start My Project"],
            };
        }

        // Comparison with others
        if (userInput.includes("why you") || userInput.includes("why choose") || userInput.includes("different") || userInput.includes("better")) {
            return {
                text: "🌟 **Why Choose Us:**\n\n✨ 10+ years of experience\n✨ 200+ completed projects\n✨ In-house design & execution team\n✨ Transparent pricing, no hidden costs\n✨ On-time delivery guarantee\n✨ Post-project support\n✨ Award-winning designs\n✨ Personalized attention to every client\n\nWe don't just design spaces, we create experiences. Ready to start your dream project?",
                suggestions: ["View Portfolio", "Get Started", "Compare Prices"],
            };
        }

        // Commercial projects
        if (userInput.includes("commercial") || userInput.includes("office") || userInput.includes("retail") || userInput.includes("restaurant")) {
            return {
                text: "🏢 **Commercial Projects:**\n\nWe specialize in:\n• Corporate offices\n• Retail showrooms\n• Restaurants & cafés\n• Hotels & hospitality\n• Clinics & wellness centers\n• Co-working spaces\n\nOur commercial designs focus on:\n✓ Brand identity\n✓ Functionality\n✓ Customer experience\n✓ ROI optimization\n\nWhat type of commercial space are you planning?",
                suggestions: ["Office Design", "Retail Design", "Get Quote"],
            };
        }

        // Residential projects
        if (userInput.includes("residential") || userInput.includes("home") || userInput.includes("house") || userInput.includes("apartment")) {
            return {
                text: "🏡 **Residential Projects:**\n\nWe design:\n• Apartments & flats\n• Independent houses & villas\n• Penthouses\n• Studio apartments\n• Renovation projects\n\nPopular rooms:\n✓ Living rooms\n✓ Bedrooms & kids' rooms\n✓ Modular kitchens\n✓ Bathrooms\n✓ Home offices\n✓ Pooja rooms\n\nWhich space would you like to transform?",
                suggestions: ["Full Home", "Single Room", "Kitchen Only"],
            };
        }

        // Modular Kitchen specific
        if (userInput.includes("kitchen") || userInput.includes("modular")) {
            return {
                text: "🍳 **Modular Kitchens:**\n\nWe create functional & beautiful kitchens:\n• L-shaped, U-shaped, Parallel, Island\n• Premium hardware (Hettich, Hafele)\n• Storage optimization\n• Appliance integration\n• Lighting & ventilation\n\n**Starting from ₹1.2 Lakhs**\n\nPackages include:\n✓ 3D design\n✓ Material selection\n✓ Installation\n✓ 10-year warranty\n\nWant to discuss your kitchen project?",
                suggestions: ["Kitchen Designs", "Get Quote", "Schedule Visit"],
            };
        }

        // Thanks/Appreciation
        if (userInput.match(/^(thank|thanks|appreciate|great)/i)) {
            return {
                text: "You're very welcome! 😊 I'm happy to help. Is there anything else you'd like to know about our services or your project? Feel free to ask!",
                suggestions: ["Get Quote", "Schedule Call", "Visit Website"],
            };
        }

        // Goodbye
        if (userInput.match(/^(bye|goodbye|see you|good night)/i)) {
            return {
                text: "Thank you for chatting with me! 👋 Feel free to reach out anytime. Have a wonderful day!\n\n📞 +91 7405169196\n📧 info@unityinteriors.com",
                suggestions: [],
            };
        }

        // Quote/Estimate
        if (userInput.includes("quote") || userInput.includes("estimate") || userInput.includes("proposal")) {
            return {
                text: "📋 **Get a Free Quote:**\n\nTo provide an accurate estimate, I'll need:\n\n1. Project type (residential/commercial)\n2. Area size (sq.ft)\n3. Service needed (design/planning/3D)\n4. Location\n5. Timeline\n6. Budget range (optional)\n\nYou can either share these details here or call us at +91 98765 43210 for immediate assistance. We typically provide quotes within 24 hours!",
                suggestions: ["Call for Quote", "Send Details", "Sample Quotes"],
            };
        }

        // Default response for unmatched queries
        return {
            text: "I'd be happy to help! I can assist you with:\n\n🔹 Our services (Interior Design, Architecture, 3D Visualization)\n🔹 Pricing and packages\n🔹 Project process and timeline\n🔹 Portfolio and past work\n🔹 Scheduling consultations\n🔹 Contact information\n\nWhat would you like to know more about?",
            suggestions: ["Our Services", "View Pricing", "Contact Us", "Get Quote"],
        };
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
                                Online now
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
                    {/* Quick Replies at top */}
                    {showQuickReplies && messages.length === 1 && (
                        <div className="chatbot__quick-replies-container">
                            <p className="chatbot__quick-replies-label">Quick options:</p>
                            <div className="chatbot__quick-replies">
                                {quickReplies.map((reply) => (
                                    <button
                                        key={reply.id}
                                        className="chatbot__quick-reply"
                                        onClick={() => handleQuickReply(reply.keyword)}
                                    >
                                        {reply.text}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {messages.map((message) => (
                        <div key={message.id}>
                            <div
                                className={`chatbot__message ${message.sender === "bot"
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
                                    <p className="chatbot__message-text" style={{ whiteSpace: 'pre-line' }}>
                                        {message.text}
                                    </p>
                                </div>
                            </div>

                            {/* Suggestions after bot message */}
                            {message.suggestions && message.suggestions.length > 0 && (
                                <div className="chatbot__suggestions">
                                    {message.suggestions.map((suggestion, idx) => (
                                        <button
                                            key={idx}
                                            className="chatbot__suggestion"
                                            onClick={() => handleQuickReply(suggestion.toLowerCase())}
                                        >
                                            {suggestion}
                                        </button>
                                    ))}
                                </div>
                            )}
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
                      <svg width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.00033 15.9998L28.0003 3.99984L16.0003 27.9998L12.0003 15.9998L4.00033 15.9998Z" fill="currentColor"/>
  </svg>
                    </button>
                </form>
            </div>
        </>
    );
};

export default ChatBot;