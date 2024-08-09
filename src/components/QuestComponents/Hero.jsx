import React from 'react';
import '../../../static/fonts.css';
import HeroBackgroundDeco from '/QuestAssets/HeroBackgroundDeco.svg';

const background = "bg-backgroundColorPrimary";
const header1 = "Complete quests, earn\npoints, unlock achievements";

function Hero(props) {
    return (
        <div className={`relative h-[70vh] flex ${background}`}>
            {/* Background Glow */}
            <img
                src={HeroBackgroundDeco}
                alt="Hero Background Decoration"
                className="absolute inset-0 object-cover w-full h-full z-0"
            />
            

            <div className="container max-w-screen-xl mx-auto flex flex-col justify-center items-center relative z-10">
                <div>
                <div
                    className="font-Brockmann text-5xl text-textColorPrimary text-center whitespace-pre-line"
                    style={{ 
                        lineHeight: '57.6px', 
                        letterSpacing: '-3%', 
                    }}
                > 
                               {header1}
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Hero;
