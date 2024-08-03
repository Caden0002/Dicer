import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SubmitButton from '/LandingAssets/JoinButtonSubmit.svg'; // Adjust the path based on your file structure
import SubmittedDeco from '/LandingAssets/JoinSubmittedButtonDeco.png'; // Adjust the path based on your file structure

const buttonText = "Join waitlist";
const submittedText = "You're in";

const JoinButtonAbsolute = React.forwardRef(({ isHovered, handleMouseEnter, handleMouseLeave, showEmailInput, buttonClicked, submitted, handleToggleEmailInput, handleSubmit }, ref) => {
    useEffect(() => {
        // Preload SubmitButton image
        const imgSubmit = new Image();
        imgSubmit.src = SubmitButton;
        imgSubmit.onload = () => {
            console.log('SubmitButton image preloaded');
        };

        // Preload SubmittedDeco image
        const imgSubmittedDeco = new Image();
        imgSubmittedDeco.src = SubmittedDeco;
        imgSubmittedDeco.onload = () => {
            console.log('SubmittedDeco image preloaded');
        };
    }, []);

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => setInputValue(e.target.value);

    return (
        <div ref={ref} className={`absolute bottom-52 flex justify-center items-center left-0 right-0 z-50`}>
            {!buttonClicked && !submitted && (
                <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 1 }}
                    className="bg-transparent flex justify-center items-center text-textColorPrimary backdrop-blur-xl"
                    style={{
                        width: "185px",
                        height: "40px",
                        padding: "8px 16px",
                        gap: "4px",
                        borderRadius: "100px",
                        border: "1px solid",
                        backgroundColor: isHovered ? 'rgba(61, 61, 72, 0.8)' : 'transparent',
                        cursor: isHovered ? 'pointer' : 'none',
                        boxShadow: isHovered ? 'inset 0 0 20px 2px #ffffff, 0 0 10px 2px #ffffff' : 'none',  // Adds both an inner and outer white glow when hovered
                    }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onClick={handleToggleEmailInput} // Toggle email input visibility on button click
                >
                    <div className="font-SFUI" style={{ fontSize: '18px', fontWeight: 600, lineHeight: '24px', textAlign: 'center' }}>
                        {buttonText}
                    </div>
                </motion.button>
            )}

            {showEmailInput && !submitted && (
                <motion.div
                    initial={{ opacity: 0 }} // Initial animation states
                    animate={{ opacity: 1 }} // Animation states when shown
                    transition={{ duration: 0.5 }} // Transition duration
                    className="relative"
                >
                    <input
                        type="email"
                        placeholder={inputValue ? '' : "john@dicer.xyz"}
                        value={inputValue}
                        onChange={handleInputChange}
                        className="pl-4 pr-12 py-2 bg-white border border-gray-300 rounded-full focus:outline-none"
                        style={{
                            width: "185px",
                            height: "40px",
                            borderRadius: "100px",
                            paddingLeft: "16px",
                            fontSize: "16px",
                        }}
                    />
                    <motion.button
                        className="absolute right-0"
                        onClick={handleSubmit}
                        style={{ width: "40px", height: "40px" }}
                    >
                        <motion.img
                            src={SubmitButton}
                            alt="Submit Button"
                            style={{ width: "40px", height: "40px" }}
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.15, ease: "easeIn" }}
                        />
                    </motion.button>
                </motion.div>
            )}

            {submitted && (
                <div
                    className="absolute rounded-full flex items-center justify-center backdrop-blur-xl overflow-hidden"
                    style={{
                        width: "185px",
                        height: "40px",
                        border: "1px solid white",
                        borderRadius: "100px",
                        cursor: 'pointer',
                        position: 'relative',
                    }}
                >
                    <motion.img
                        src={SubmittedDeco}
                        alt="Submitted Decoration"
                        className=" absolute right-32 w-1/2"
                        initial={{ x: 200 }}
                        animate={{ x: 0 }}
                        transition={{
                            type: 'spring',
                            stiffness: 600,
                            damping: 10,
                            mass: 1,
                            velocity: 2
                        }}
                    />
                    <motion.div
                        className="flex items-center justify-center text-white px-4 py-2"
                        initial={{ x: 200 }}
                        animate={{ x: 0 }}
                        transition={{
                            type: 'spring',
                            stiffness: 600,
                            damping: 10,
                            mass: 1,
                            velocity: 2
                        }}
                    >
                        <div className="font-SFUI pl-8" style={{ fontSize: '18px', fontWeight: 600, textAlign: 'center' }}>
                            {submittedText}
                        </div>
                    </motion.div>
                </div>
            )}
        </div>
    );
});

export default JoinButtonAbsolute;
