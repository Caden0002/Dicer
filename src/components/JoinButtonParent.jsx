import React, { useState, useEffect, useRef } from 'react';
import JoinButtonAbsolute from "./JoinButtonAbsolute.jsx";
import JoinButtonFixed from "./JoinButtonFixed.jsx";

const JoinButtonParent = () => {
    const [isFixedVisible, setIsFixedVisible] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [showEmailInput, setShowEmailInput] = useState(false);
    const [buttonClicked, setButtonClicked] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleToggleEmailInput = () => {
        setButtonClicked(true);
        setShowEmailInput(!showEmailInput);
    };

    const handleSubmit = () => {
        setSubmitted(true);
    };

    const handleReset = () => {
        setButtonClicked(false);
        setShowEmailInput(false);
        setSubmitted(false);
    };

    const buttonRef = useRef(null);

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

    return (
        <>
            {!isFixedVisible && (
                <JoinButtonAbsolute
                    isHovered={isHovered}
                    handleMouseEnter={handleMouseEnter}
                    handleMouseLeave={handleMouseLeave}
                    showEmailInput={showEmailInput}
                    buttonClicked={buttonClicked}
                    submitted={submitted}
                    handleToggleEmailInput={handleToggleEmailInput}
                    handleSubmit={handleSubmit}
                    ref={buttonRef}
                />
            )}
            {isFixedVisible && (
                <JoinButtonFixed
                    isHovered={isHovered}
                    handleMouseEnter={handleMouseEnter}
                    handleMouseLeave={handleMouseLeave}
                    showEmailInput={showEmailInput}
                    buttonClicked={buttonClicked}
                    submitted={submitted}
                    handleToggleEmailInput={handleToggleEmailInput}
                    handleSubmit={handleSubmit}
                />
            )}
        </>
    );
};

export default JoinButtonParent;
