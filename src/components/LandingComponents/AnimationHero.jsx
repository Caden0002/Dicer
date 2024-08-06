import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import heroDicerLogo from '/LandingAssets/HeroDicerLogo.mp4'; // Import the video file
import heroBackground from '/LandingAssets/HeroBackground.mp4'; // Import the video file

const background = "bg-backgroundColorPrimary";

const header1 = "Dicer aims to redefine";
const header2 = "the web3 casino experience.";

const tabletHeader1 = "Dicer aims to";
const tabletHeader2 = "redefine the";
const tabletHeader3 = "web3 casino";
const tabletHeader4 = "experience.";

const container1Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.075,
            delayChildren: 0.5,
        },
    },
};

const container2Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.075,
            delayChildren: 0.65,
        },
    },
};

const container3Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.075,
            delayChildren: 0.8,
        },
    },
};

const container4Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.075,
            delayChildren: 0.95,
        },
    },
};

const wordVariants = {
    hidden: {
        opacity: 0,
        x: -200,
    },
    visible: {
        opacity: 1,
        x: 0,
    },
};

function AnimationHero(props) {
    const [isTablet, setIsTablet] = useState(window.innerWidth <= 1000);

    useEffect(() => {
        const handleResize = () => setIsTablet(window.innerWidth <= 1000);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className={`relative h-[85vh] sm:h-screen flex ${background}`}>
            <motion.video
                autoPlay
                loop
                muted
                playsInline
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, delay: 1 }}
                className="absolute inset-0 object-cover w-full h-full z-0"
                style={{ objectPosition: 'right' }} // Adds inline style for object-position
            >
                <source src={heroBackground} type="video/mp4" />
                Your browser does not support the video tag.
            </motion.video>
            <div
                className={`container max-w-screen-xl mx-auto flex flex-col ${isTablet ? 'justify-end items-left' : 'justify-center items-center'} relative z-10 px-4`}
            >
                {isTablet ? (
                    <>
                        <video width="76" height="76" autoPlay loop muted className="mb-4">
                            <source src={heroDicerLogo} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <div className="font-Brockmann text-5xl sm:text-7xl text-textColorPrimary leading-none flex flex-col items-left mb-4">
                            <motion.div
                                variants={container1Variants}
                                initial="hidden"
                                animate="visible"
                            >
                                {tabletHeader1.split(" ").map((word, index) => (
                                    <motion.span key={index} variants={wordVariants}>
                                        {word}{' '}
                                    </motion.span>
                                ))}
                            </motion.div>
                            <motion.div
                                variants={container2Variants}
                                initial="hidden"
                                animate="visible"
                            >
                                {tabletHeader2.split(" ").map((word, index) => (
                                    <motion.span key={index} variants={wordVariants}>
                                        {word}{' '}
                                    </motion.span>
                                ))}
                            </motion.div>
                            <motion.div
                                variants={container3Variants}
                                initial="hidden"
                                animate="visible"
                            >
                                {tabletHeader3.split(" ").map((word, index) => (
                                    <motion.span key={index} variants={wordVariants}>
                                        {word}{' '}
                                    </motion.span>
                                ))}
                            </motion.div>
                            <motion.div
                                variants={container4Variants}
                                initial="hidden"
                                animate="visible"
                            >
                                {tabletHeader4.split(" ").map((word, index) => (
                                    <motion.span key={index} variants={wordVariants}>
                                        {word}{' '}
                                    </motion.span>
                                ))}
                            </motion.div>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="brockmann2 text-textColorPrimary flex justify-start items-center mr-36">
                            <video width="76" height="76" autoPlay loop muted className="mr-2">
                                <source src={heroDicerLogo} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <motion.div
                                variants={container1Variants}
                                initial="hidden"
                                animate="visible"
                            >
                                {header1.split(" ").map((word, index) => (
                                    <motion.span key={index} variants={wordVariants}>
                                        {word}{' '}
                                    </motion.span>
                                ))}
                            </motion.div>
                        </div>
                        <motion.div
                            variants={container2Variants}
                            initial="hidden"
                            animate="visible"
                            className="brockmann2 text-textColorPrimary ml-2 mb-12"
                        >
                            {header2.split(" ").map((word, index) => (
                                <motion.span key={index} variants={wordVariants}>
                                    {word}{' '}
                                </motion.span>
                            ))}
                        </motion.div>
                    </>
                )}
            </div>
        </div>
    );
}

export default AnimationHero;
