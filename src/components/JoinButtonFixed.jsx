import React from 'react';
import SubmitButton from '/JoinButtonSubmit.svg'; // Adjust the path based on your file structure
import SubmittedDeco from '/JoinSubmittedButtonDeco.png'; // Adjust the path based on your file structure

const buttonText = "Join waitlist";
const submittedText = "You're in";

const JoinButtonFixed = ({ isHovered, handleMouseEnter, handleMouseLeave, showEmailInput, buttonClicked, submitted, handleToggleEmailInput, handleSubmit }) => {
    return (
        <div className="fixed flex justify-center items-center left-0 right-0 z-50" style={{ top: '40px' }}>
            {!buttonClicked && !submitted && (
                <button
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
                </button>
            )}

            {showEmailInput && !submitted && (
                <div className="absolute mt-10 flex items-center">
                    <input
                        type="email"
                        placeholder="john@dicer.xyz"
                        className="pl-4 pr-12 py-2 bg-white border border-gray-300 rounded-full focus:outline-none"
                        style={{
                            width: "185px",
                            height: "40px",
                            borderRadius: "100px",
                            paddingLeft: "16px",
                            fontSize: "16px",
                        }}
                    />
                    <button className="absolute right-0" onClick={handleSubmit}>
                        <img src={SubmitButton} alt="Submit Button" style={{ width: "40px", height: "40px" }} />
                    </button>
                </div>
            )}

            {submitted && (
                <div className="absolute flex items-center justify-center text-white px-4 py-2 rounded-full backdrop-blur-xl overflow-hidden"
                     style={{
                         width: "185px",
                         height: "40px",
                         border: "1px solid white",
                         borderRadius: "100px",
                         cursor: isHovered ? 'pointer' : 'none',
                         position: 'relative', // Ensure positioning context for absolute elements
                     }}
                >
                    <div className="font-SFUI pl-4" style={{ fontSize: '18px', fontWeight: 600, textAlign: 'center' }}>
                        {submittedText}
                    </div>
                    <img src={SubmittedDeco} alt="Submitted Decoration" className="absolute right-32 w-1/2 z-0"  />
                </div>
            )}
        </div>
    );
};

export default JoinButtonFixed;