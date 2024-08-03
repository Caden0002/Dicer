import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import '../../../static/fonts.css';
import PosterBackgroundDeco from '/LandingAssets/PosterBackgroundDeco.svg'; // Import the background image

import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";

import Brooklyn from '/LandingAssets/PosterBrooklyn.png';
import Macao from '/LandingAssets/PosterMacao.png';
import Navada from '/LandingAssets/PosterNavada.png';

const background = "bg-backgroundColorPrimary";

const header1 = "An";
const header3 = "catalog of games.";

const imageStyle = {
    width: '447px',
    height: '664px',
    borderRadius: '20px',
    border: '1px solid #FFFFFF33',
};

function AnimationPoster(props) {
    const [length, setLength] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const viewportHeight = window.innerHeight;
            const startPosition = viewportHeight / 0.7;
            const newLength = Math.max(0, Math.min(3, Math.floor((scrollPosition - startPosition) / 100)));
            setLength(newLength);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

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
                            color: 'rgba(255, 255, 255, 0.4)',
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
            <div className="container max-w-screen-xl mx-auto relative z-20 overflow-x-hidden">

                <Splide
                    options={{
                        type: "loop",
                        // perPage: 3,
                        autoScroll: {
                            pauseOnHover: false,
                            pauseOnFocus: false,
                            rewind: true,
                            speed: 1
                        },
                        arrows: false,
                        pagination: false,
                            fixedWidth: '445px', // Fixed width for each slide

                            gap: '12px',

                    }}
                    extensions={{ AutoScroll }}
                >
                    <SplideSlide>
                        <img src={Brooklyn} alt="Poster Brooklyn" style={imageStyle} />
                    </SplideSlide>
                    <SplideSlide>
                        <img src={Macao} alt="Poster Macao" style={imageStyle} />
                    </SplideSlide>
                    <SplideSlide>
                        <img src={Navada} alt="Poster Navada" style={imageStyle} />
                    </SplideSlide>
                    <SplideSlide>
                        <img src={Brooklyn} alt="Poster Brooklyn" style={imageStyle} />
                    </SplideSlide>
                    <SplideSlide>
                        <img src={Macao} alt="Poster Macao" style={imageStyle} />
                    </SplideSlide>
                    <SplideSlide>
                        <img src={Navada} alt="Poster Navada" style={imageStyle} />
                    </SplideSlide>
                </Splide>
                                </div>

            </div>
        </div>
    );
}

export default AnimationPoster;