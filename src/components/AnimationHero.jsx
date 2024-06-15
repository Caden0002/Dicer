import React from 'react';
import { motion } from 'framer-motion';
import heroDicerLogo from '/HeroDicerLogo.mp4'; // Import the video file
import heroBackground from '/HeroBackground.mp4'; // Import the video file

const background = "bg-backgroundColorPrimary";

const header1 = "Dicer aims to redefine";
const header2 = "the web3 casino experience.";

const container1Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.075, // Stagger the reveal of each word
        },
    },
};

const container2Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.075,
            delayChildren: 0.15, // Delay the start of this animation by 0.15 seconds
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
    return (
        <div className={`relative min-h-screen flex ${background}`}>
            <motion.video
                autoPlay
                loop
                muted
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, delay: 0.5 }} // Fade in with a delay of 1 second and duration of 1 second
                className="absolute inset-0 object-cover w-full h-full z-0"
            >
                <source src={heroBackground} type="video/mp4" />
                Your browser does not support the video tag.
            </motion.video>
            <div className="container max-w-screen-xl mx-auto flex flex-col justify-center items-center relative z-10">
                <div className="brockmann2 text-textColorPrimary flex justify-start items-center mr-36">
                    <video width="76" height="76" autoPlay loop muted className="mr-2">
                        <source src={heroDicerLogo} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <motion.div
                        variants={container1Variants}
                        initial="hidden"
                        animate="visible"
                        className=""
                    >
                        {header1.split(" ").map((word, index) => (
                            <motion.span
                                key={index}
                                variants={wordVariants}
                            >
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
                        <motion.span
                            key={index}
                            variants={wordVariants}
                            className=""
                        >
                            {word}{' '}
                        </motion.span>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}

export default AnimationHero;
