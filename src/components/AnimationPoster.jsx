import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import '../../static/fonts.css';
import PosterBackgroundDeco from '/PosterBackgroundDeco.svg'; // Import the background image

const background = "bg-backgroundColorPrimary"; // Replace with the correct Tailwind class for your primary background color

const header1 = "An";
const header3 = "catalog of games.";

const items = [
    { image: '/PosterBrooklyn.png' },
    { image: '/PosterMacao.png' },
    { image: '/PosterMacao.png' },
    { image: '/PosterNavada.png' },
    { image: '/PosterBrooklyn.png' },
    { image: '/PosterMacao.png' },
    { image: '/PosterNavada.png' },
];

const AnimationPoster = () => {
    const [length, setLength] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const viewportHeight = window.innerHeight;
            const startPosition = viewportHeight / 0.7;
            const newLength = Math.max(0, Math.min(3, Math.floor((scrollPosition - startPosition) / 100)));
            setLength(newLength);
        };

        // Add scroll event listener when component mounts
        window.addEventListener('scroll', handleScroll);

        // Remove scroll event listener when component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Empty dependency array ensures this effect runs only on mount

    return (
        <div className={`relative flex h-full ${background}`}>
            <img src={PosterBackgroundDeco} alt="Background Decoration" className="absolute z-10 w-full h-full" />
            <div className="container max-w-screen-xl mx-auto flex flex-col items-center relative z-20">
                <div className="my-24">
                    <div className="brockmann3 text-textColorPrimary2 flex leading-tight">
                        <div>
                            {header1}&nbsp;
                        </div>
                        <div className="leading-tight" style={{
                            background: '-webkit-linear-gradient(180deg, #33FF00 0%, #00FF0A 13%, #FCFF66 28%, #FF0000 43%, #FF0000 58%, #00E0FF 70%, #FF549C 87%)',
                            WebkitBackgroundClip: 'text',
                            backgroundClip: 'text',
                            color: 'rgba(255, 255, 255, 0.4)', // Transparent white color with 40% opacity
                        }}>
                            evergro{Array.from({ length }, (_, index) => (
<motion.span
    key={index}
    initial={{ opacity: 0}}
    animate={{ opacity: 1}}
    transition={{ duration: 0.25, delay: index * 0.1 }}
>
    o
</motion.span>
                            ))}wing
                        </div>
                    </div>
                    <div className="brockmann3 text-textColorPrimary2 flex justify-center">
                        {header3}
                    </div>
                </div>
                <div className="overflow-x-auto scrollbar-hide">
                    <div className="flex space-x-2 items-center" style={{ marginLeft: '-200px' }}>
                        {items.map((item, index) => (
                            <div className="flex-none border-white rounded-3xl overflow-hidden" key={index} style={{ border: '1px solid #FFFFFF33' }}>
                                <img src={item.image} alt={`Poster ${index}`} style={{ width: '447px', height: '664px' }} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AnimationPoster;
