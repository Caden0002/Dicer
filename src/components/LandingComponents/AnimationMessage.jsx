import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import '../../../static/fonts.css';
import messageImage1 from '/LandingAssets/Message1.png'; // Import the image file
import messageImage2 from '/LandingAssets/Message2.png'; // Import the image file
import MessageBackgroundDeco from '/LandingAssets/MessageBackgroundDeco.svg'; // Import the background image

const background = "bg-backgroundColorPrimary"; // Replace with the correct Tailwind class for your primary background color
const header1 = "Chip";
const header2 = "chats";
const subheader = "Share memorable moments with friends and\nstrangers in multiplayer games, and keep the fun\ngoing by connecting through linked social profiles.";

function AnimationMessage(props) {
    const [isImage1Visible, setIsImage1Visible] = useState(false);
    const image1Ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry], observerInstance) => {
                if (entry.isIntersecting) {
                    setIsImage1Visible(true);
                    observerInstance.unobserve(entry.target); // Stop observing once intersecting
                }
            },
        );

        if (image1Ref.current) {
            observer.observe(image1Ref.current);
        }

        return () => {
            if (image1Ref.current) {
                observer.unobserve(image1Ref.current);
            }
        };
    }, []); // Empty dependency array ensures this effect runs only once

    return (
        <div className={`relative flex h-full ${background}`}>
            <img src={MessageBackgroundDeco} alt="Background Decoration" className="absolute z-10 w-full h-full"/>

            <div className="container max-w-screen-xl mx-auto flex flex-col justify-center items-center relative pt-64 pb-32">
                <motion.img
                    ref={image1Ref}
                    src={messageImage1}
                    alt="Message"
                    className="w-2/3 sm:w-1/2 md:w-1/3 h-auto pb-0 pt-16"
                    initial={{ y: 500, rotate: 30, opacity: 0 }}
                    animate={isImage1Visible ? { y: 0, x: 0, rotate: 0, opacity: 1 } : { y: 500, x: 0, rotate: 30, opacity: 0 }}
                    transition={{ type: 'spring', stiffness: 58, damping: 7.72, mass: 1, duration: 1.554 }}
                />

                <div className="text-textColorPrimary2 py-24 leading-tight px-4">
                    <div className="flex brockmann5 text-textColorPrimary2 ">
                        <div className="text-[#ffffff]/[0.1] md:text-[#ffffff]/[0.4]" style={{
                            background: '-webkit-linear-gradient(180deg, #FF7A00 0%, #FFE500 10%, #00E0FF 70%, #FF549C 87%)',
                            WebkitBackgroundClip: 'text',
                            backgroundClip: 'text',
                        }}>
                            {header1}
                        </div>
                        <div className="ml-1">
                            {header2}
                        </div>
                    </div>
                    <div className="sm:sfui2 text-xl sm:text-3xl mt-12 text-textColorTertiary sm:whitespace-pre-line">
                        {subheader}
                    </div>
                </div>
                <img src={messageImage2} alt="Message" className="w-3/4 sm:w-2/3 md:w-1/2 h-auto md:p-16" />
            </div>
        </div>
    );
}

export default AnimationMessage;
