import { useState } from 'react';

const buttonText = "Join waitlist";

export default function JoinButtonFixed() {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
<div className={`fixed flex justify-center items-center left-0 right-0 z-50`} style={{ top: '40px' }}>
              <button
                className="bg-transparent flex justify-center items-center text-textColorPrimary"
                style={{
                    width: "185px",
                    height: "40px",
                    padding: "8px 16px",
                    gap: "4px",
                    borderRadius: "100px",
                    border: "1px solid",
                    backgroundColor: isHovered ? 'rgba(61, 61, 72, 0.8)' : 'transparent',
                    cursor: isHovered ? 'pointer' : 'none',
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div className="font-SFUI" style={{ fontSize: '18px', fontWeight: 600, lineHeight: '24px', textAlign: 'center' }}>
                    {buttonText}
                </div>
            </button>
        </div>
    );
}