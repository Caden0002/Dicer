import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import '../../../static/fonts.css';

const background = "bg-backgroundColorPrimary"; // Replace with the correct Tailwind class for your primary background color
const screenHeight = "h-[969px]"; // Use Tailwind's h-screen for full screen height

const header1 = "Jackpots. ";
const header2 = "Rewards";
const header3 = "Let's roll.";

function Catchphrase(props) {
    const header2Ref = useRef(null);
    const header3Ref = useRef(null);
    const [animatedHeader2, setAnimatedHeader2] = useState(false);
    const [animatedHeader3, setAnimatedHeader3] = useState(false);

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '-150px',
            threshold: 1 // Adjust threshold as needed, 0.5 means trigger when 50% of the element is visible
        };

        const handleIntersection = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (entry.target === header2Ref.current && !animatedHeader2) {
                        setAnimatedHeader2(true);
                    }
                    if (entry.target === header3Ref.current && !animatedHeader3) {
                        setAnimatedHeader3(true);
                    }
                }
            });
        };

        const observerHeader2 = new IntersectionObserver(handleIntersection, observerOptions);
        const observerHeader3 = new IntersectionObserver(handleIntersection, observerOptions);

        if (header2Ref.current) {
            observerHeader2.observe(header2Ref.current);
        }
        if (header3Ref.current) {
            observerHeader3.observe(header3Ref.current);
        }

        return () => {
            observerHeader2.disconnect();
            observerHeader3.disconnect();
        };
    }, [animatedHeader2, animatedHeader3]);

    return (
        <div className={`relative flex ${background} ${screenHeight}`}>
            <div className="container max-w-screen-xl mx-auto flex flex-col justify-center items-center relative">
                <div style={{ paddingBottom: "315px" }}>
                    <div className="brockmann1 text-textColorPrimary flex">
                        {header1}
                        <motion.span
                            ref={header2Ref}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: animatedHeader2 ? 1 : 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            {header2}
                        </motion.span>
                    </div>
                    <div className="brockmann1 text-textColorPrimary flex justify-center">
                        <motion.span
                            ref={header3Ref}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: animatedHeader3 ? 1 : 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }} // Added delay of 0.5s
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
