import React, { useEffect, useRef } from 'react';

const TextScrollEverglow = () => {
    const textRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const viewportHeight = window.innerHeight;
            const startPosition = viewportHeight / 1.5;
            const length = Math.max(0, Math.min(3, Math.floor((scrollPosition - startPosition) / 100)));

            const word = "Everglo" + "o".repeat(length) + "wing";
            if (textRef.current) {
                textRef.current.textContent = word;
            }
        };

        // Add scroll event listener when component mounts
        window.addEventListener('scroll', handleScroll);

        // Remove scroll event listener when component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Empty dependency array ensures this effect runs only on mount

    return (
        <div ref={textRef}>Everglow</div>
    );
}

export default TextScrollEverglow;
