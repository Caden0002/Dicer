import React from 'react';
import '../../static/fonts.css';
import messageImage1 from '/Message1.png'; // Import the image file

import messageImage2 from '/Message2.png'; // Import the image file
import MessageBackgroundDeco from '/MessageBackgroundDeco.svg'; // Import the background image

const background = "bg-backgroundColorPrimary"; // Replace with the correct Tailwind class for your primary background color
const header1 = "Chip";
const header2 = "chats";
const subheader = "Share memorable moments with friends and\nstrangers in multiplayer games, and keep the fun\ngoing by connecting through linked social profiles."

function Message(props) {
    return (
        <div className={`relative flex h-full ${background} `}>
            <img src={MessageBackgroundDeco} alt="Background Decoration" className="absolute z-10 w-full h-full"/>

            <div className="container max-w-screen-xl mx-auto flex flex-col justify-center items-center relative pt-64 pb-32">
                <img src={messageImage1} alt="Message" className="w-1/3 h-1/3 pb-0 pt-16" />
                <div className="text-textColorPrimary2 py-24 leading-tight">
                    <div className="flex brockmann5 text-textColorPrimary2 ">
                        <div className="" style={{
                            background: '-webkit-linear-gradient(180deg, #FF7A00 0%, #FFE500 10%, #00E0FF 70%, #FF549C 87%)',
                            WebkitBackgroundClip: 'text',
                            backgroundClip: 'text',
                            color: 'rgba(255, 255, 255, 0.4)', // Transparent white color with 50% opacity
                        }}>
                            {header1}
                        </div>
                        <div className=" ">
                            &nbsp;{header2}
                        </div>
                    </div>
                    <div className="sfui2 mt-12 text-textColorTertiary whitespace-pre-line">
                        {subheader}
                    </div>
                </div>
                <img src={messageImage2} alt="Message" className="w-1/2 h-1/2 p-16" />
            </div>
        </div>
    );
}

export default Message;
