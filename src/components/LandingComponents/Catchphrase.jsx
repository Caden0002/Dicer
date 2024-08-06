import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import '../../../static/fonts.css';

const background = "bg-backgroundColorPrimary"; // Replace with the correct Tailwind class for your primary background color
const screenHeight = "h-[969px]"; // Use Tailwind's h-screen for full screen height

const header1 = "Jackpots. ";
const header2 = "Rewards";
const header3 = "Let's roll.";

function Catchphrase(props) {
    const header1Ref = useRef(null);
    const header2Ref = useRef(null);
    const header3Ref = useRef(null);
    const [animatedHeader1, setAnimatedHeader1] = useState(false);
    const [animatedHeader2, setAnimatedHeader2] = useState(false);
    const [animatedHeader3, setAnimatedHeader3] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1000);
    const [observerOptions, setObserverOptions] = useState({
        root: null,
        rootMargin: isMobile ? '-10px' : '-150px',
        threshold: 1
    });

    useEffect(() => {
        const handleResize = () => {
            const mobile = window.innerWidth <= 1000;
            setIsMobile(mobile);
            setObserverOptions(prevOptions => ({
                ...prevOptions,
                rootMargin: mobile ? '-10px' : '-150px'
            }));
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const handleIntersection = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (entry.target === header1Ref.current && !animatedHeader1) {
                        setAnimatedHeader1(true);
                        setTimeout(() => {
                            setAnimatedHeader2(true);
                            setTimeout(() => {
                                setAnimatedHeader3(true);
                            }, 500); // Delay for header3
                        }, 500); // Delay for header2
                    }
                }
            });
        };

        const observerHeader1 = new IntersectionObserver(handleIntersection, observerOptions);
        const observerHeader2 = new IntersectionObserver(handleIntersection, observerOptions);
        const observerHeader3 = new IntersectionObserver(handleIntersection, observerOptions);

        if (header1Ref.current) {
            observerHeader1.observe(header1Ref.current);
        }
        if (header2Ref.current) {
            observerHeader2.observe(header2Ref.current);
        }
        if (header3Ref.current) {
            observerHeader3.observe(header3Ref.current);
        }

        return () => {
            observerHeader1.disconnect();
            observerHeader2.disconnect();
            observerHeader3.disconnect();
        };
    }, [animatedHeader1, animatedHeader2, animatedHeader3, observerOptions]);

    if (isMobile) {
        return (
            <div className={`relative flex ${background} ${screenHeight}`}>
                <div className="container max-w-screen-xl mx-auto flex flex-col justify-center items-center relative py-4 overflow-hidden">
                    <div
                        ref={header1Ref}
                        className="font-Brockmann text-7xl font-semibold text-textColorPrimary text-center mb-4"
                        style={{ letterSpacing: '-0.03em', opacity: animatedHeader1 ? 1 : 0, transition: 'opacity 0.5s' }}
                    >
                        {header1}
                    </div>
                    <div
                        ref={header2Ref}
                        className="font-Brockmann text-7xl font-semibold text-textColorPrimary text-center mb-4"
                        style={{ letterSpacing: '-0.03em', opacity: animatedHeader2 ? 1 : 0, transition: 'opacity 0.5s' }}
                    >
                        {header2}
                    </div>
                    <div
                        ref={header3Ref}
                        className="font-Brockmann text-7xl font-semibold text-textColorPrimary text-center"
                        style={{ letterSpacing: '-0.03em', opacity: animatedHeader3 ? 1 : 0, transition: 'opacity 0.5s' }}
                    >
                        {header3}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className={`relative flex ${background} ${screenHeight}`}>
            <div className="container max-w-screen-xl mx-auto flex flex-col justify-center items-center relative">
                <div style={{ paddingBottom: "315px" }}>
                    <div className="brockmann1 text-textColorPrimary flex">
                        <motion.span
                            ref={header1Ref}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: animatedHeader1 ? 1 : 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            {header1}
                        </motion.span>
                        <motion.span
                            ref={header2Ref}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: animatedHeader2 ? 1 : 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }} // Delay for header2
                        >
                            {header2}
                        </motion.span>
                    </div>
                    <div className="brockmann1 text-textColorPrimary flex justify-center">
                        <motion.span
                            ref={header3Ref}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: animatedHeader3 ? 1 : 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }} // Delay for header3
                        >
                            {header3}
                        </motion.span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Catchphrase;
