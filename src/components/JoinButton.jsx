// Fixed and Absolute in one Join component

import React, { useState, useEffect, useRef } from 'react';

const buttonText = "Join waitlist";

const JoinButton = () => {
    const [isFixedVisible, setIsFixedVisible] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const buttonRef = useRef(null);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsFixedVisible(!entry.isIntersecting); // Show fixed button when the absolute button is no longer intersecting
            },
            { rootMargin: '-80px 0px 0px 0px' } // 80px below top
        );

        if (buttonRef.current) {
            observer.observe(buttonRef.current);
        }

        return () => {
            if (buttonRef.current) {
                observer.unobserve(buttonRef.current);
            }
        };
    }, []);

    // Define button style as a constant
    const buttonStyle = {
        width: "185px",
        height: "40px",
        padding: "8px 16px",
        gap: "4px",
        borderRadius: "100px",
        border: "1px solid",
        backgroundColor: isHovered ? 'rgba(61, 61, 72, 0.8)' : 'transparent',
        cursor: isHovered ? 'pointer' : 'none',
        boxShadow: isHovered ? 'inset 0 0 20px 2px #ffffff, 0 0 10px 2px #ffffff' : 'none',  // Adds both an inner and outer white glow when hovered

    };

    return (
        <>
            {!isFixedVisible && 
                <div ref={buttonRef} className="absolute bottom-52 flex justify-center items-center left-0 right-0 z-50">
                    <button
                        className="bg-transparent flex justify-center items-center text-textColorPrimary backdrop-blur-xl	"
                        style={buttonStyle}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div className="font-SFUI" style={{ fontSize: '18px', fontWeight: 600, lineHeight: '24px', textAlign: 'center' }}>
                            {buttonText}
                        </div>
                    </button>
                </div>
            }
            {isFixedVisible && 
                <div className="fixed flex justify-center items-center left-0 right-0 z-50" style={{ top: '40px' }}>
                    <button
                        className="bg-transparent flex justify-center items-center text-textColorPrimary backdrop-blur-xl	"
                        style={buttonStyle}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div className="font-SFUI" style={{ fontSize: '18px', fontWeight: 600, lineHeight: '24px', textAlign: 'center' }}>
                            {buttonText}
                        </div>
                    </button>
                </div>
            }
        </>
    );
};

export default JoinButton;




// JoinButton.jsx
// JoinButton and import Absolute and Fixed

// import React, { useState, useEffect, useRef } from 'react';
// import JoinButtonAbsolute from "./JoinButtonAbsolute.jsx";
// import JoinButtonFixed from "./JoinButtonFixed.jsx";




// const JoinButton = () => {
//     const [isFixedVisible, setIsFixedVisible] = useState(false);
//     const buttonRef = useRef(null);

//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             ([entry]) => {
//                 setIsFixedVisible(!entry.isIntersecting); // Show fixed button when the absolute button is no longer intersecting
//             },
//             { rootMargin: '-80px 0px 0px 0px' } // 80px below top
//         );

//         if (buttonRef.current) {
//             observer.observe(buttonRef.current);
//         }

//         return () => {
//             if (buttonRef.current) {
//                 observer.unobserve(buttonRef.current);
//             }
//         };
//     }, []);

//     return (
//         <>
//             {!isFixedVisible && <JoinButtonAbsolute ref={buttonRef} />}
//             {isFixedVisible && <JoinButtonFixed />}
//         </>
//     );
// };

// export default JoinButton;







