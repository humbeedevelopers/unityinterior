'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Image from "next/image";
import Banner from "@/images/coreBanner.png";
import ParagraphTextReveal from "@/animations/ParagraphTextReveal";
import './CoreOfferingFinal.scss';

const CoreOfferingFramer = () => {
    const sectionRef = useRef(null);
    const containerRef = useRef(null);
    const [expandedCard, setExpandedCard] = useState(0);
    const [isPinned, setIsPinned] = useState(false);

    const offerings = [
        {
            id: 1,
            title: 'INTERIOR DESIGNING',
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.",
            image: Banner,
        },
        {
            id: 2,
            title: 'ARCHITECTURAL PLANNING',
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.",
            image: Banner,
        },
        {
            id: 3,
            title: '3D VISUALIZATION',
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.",
            image: Banner,
        },
    ];

    useEffect(() => {
        const section = sectionRef.current;
        const container = containerRef.current;
        if (!section || !container) return;

        const handleScroll = () => {
            const rect = section.getBoundingClientRect();
            const sectionTop = rect.top;
            const sectionHeight = rect.height;
            const windowHeight = window.innerHeight;

            // Pin logic: pin when section reaches top, unpin when section ends
            if (sectionTop <= 0 && sectionTop > -sectionHeight + windowHeight) {
                setIsPinned(true);

                // Calculate scroll progress within the pinned section
                const scrollProgress = Math.abs(sectionTop) / (sectionHeight - windowHeight);
                const newIndex = Math.min(
                    Math.floor(scrollProgress * offerings.length),
                    offerings.length - 1
                );

                if (newIndex !== expandedCard) {
                    setExpandedCard(newIndex);
                }
            } else {
                setIsPinned(false);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Initial check

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [expandedCard, offerings.length]);

    return (
        <section className="core-offering" ref={sectionRef}>
            <div
                className="core-offering__container"
                ref={containerRef}
                style={{
                    position: isPinned ? 'fixed' : 'absolute',
                    top: isPinned ? 0 : 'auto',
                    bottom: !isPinned && expandedCard === offerings.length - 1 ? 0 : 'auto',
                    left: 0,
                    right: 0,
                }}
            >
                <h2
                    className="core-offering__title"

                ><ParagraphTextReveal>
                        CORE OFFERINGS</ParagraphTextReveal>
                </h2>

                <div className="core-offering__cards-list">
                    {offerings.map((offering, index) => {
                        const isExpanded = expandedCard === index;

                        return (
                            <motion.div
                                key={offering.id}
                                className={`core-offering__card ${isExpanded ? 'expanded' : ''}`}
                                layout
                                transition={{ duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
                            >
                                {/* Title - Always Visible */}
                                <motion.div
                                    className="core-offering__card-header"
                                    whileHover={{ backgroundColor: '#f5f5f5' }}
                                >
                                    <h3 className="core-offering__card-title">{offering.title}</h3>
                                </motion.div>

                                {/* Content - Expands/Collapses */}
                                <motion.div
                                    className="core-offering__card-content-wrapper"
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{
                                        height: isExpanded ? 'auto' : 0,
                                        opacity: isExpanded ? 1 : 0,
                                    }}
                                    transition={{ duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
                                >
                                    <div className="core-offering__card-content">
                                        <div className="core-offering__card-image">
                                            <Image
                                                src={offering.image}
                                                alt={offering.title}
                                                className="core-offering__image"
                                            />
                                            <div className="core-offering__overlay">
                                                <motion.p
                                                    className="core-offering__description"
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{
                                                        opacity: isExpanded ? 1 : 0,
                                                        y: isExpanded ? 0 : 20,
                                                    }}
                                                    transition={{ delay: 0.2, duration: 0.4 }}
                                                >
                                                    {offering.description}
                                                </motion.p>
                                                <motion.button
                                                    className="core-offering__btn"
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{
                                                        opacity: isExpanded ? 1 : 0,
                                                        y: isExpanded ? 0 : 10,
                                                    }}
                                                    transition={{ delay: 0.3, duration: 0.4 }}
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                >
                                                    Learn more
                                                </motion.button>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default CoreOfferingFramer;
