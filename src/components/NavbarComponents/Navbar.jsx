import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // Import AnimatePresence
import '../../../static/fonts.css';
import DicerLogo from '/GameAssets/DicerLogoWhite.svg';
import ProfileLogo from '/GameAssets/NavbarProfile.svg';
import NavbarDropDownGames from './NavbarDropDownGames';
import NavbarDropDownQuest from './NavbarDropDownQuest'; // Import the new component

const navLinks = [
    { text: 'Games', href: '#GameBento' },
    { text: 'Quests', href: '#QuestBanner' },
    { text: 'Referral', href: '#Referral' }
];

const Navbar = () => {
    const [isHovered1, setIsHovered1] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false); // State for navLink2

    // Define animation variants
    const variants = {
        open: { opacity: 1, y: 0 },
        closed: { opacity: 0, y: "-50px" },
    };

      return (
        <div className="mt-6 fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
            <div className="mx-auto backdrop-blur-xl rounded-2xl pointer-events-auto" style={{ background: 'rgba(4, 4, 5, 0.6)', border: '1px solid rgba(255, 255, 255, 0.25)' }}>
                <div className="inline-flex justify-center items-center sfuiNavbarLinks cursor-pointer text-textColorSecondary px-4 space-x-11">
                    <img src={DicerLogo} alt="Dicer Logo" className="cursor-pointer" style={{ width: '18px', height: '18px' }} />
                    {navLinks.map((navLink, index) => (
                        <div
                            key={index}
                            className="py-4 hover:text-textColorPrimary relative group"
                            onMouseEnter={() => {
                                if (index === 0) setIsHovered1(true);
                                if (index === 1) setIsHovered2(true);
                            }}
                            onMouseLeave={() => {
                                if (index === 0) setIsHovered1(false);
                                if (index === 1) setIsHovered2(false);
                            }}
                        >
                            <a href={navLink.href} className="relative group">
                                {navLink.text}
                            </a>
                            <AnimatePresence>
                                {(index === 0 && isHovered1) && (
                                    <motion.div
                                        initial="closed"
                                        animate="open"
                                        variants={variants}
                                        transition={{ type: "spring", duration: 0.3, mass: 1, stiffness: 168.8, damping: 15 }}
                                    >
                                        <NavbarDropDownGames isHovered={isHovered1} />
                                    </motion.div>
                                )}
                                {(index === 1 && isHovered2) && (
                                    <motion.div
                                        initial="closed"
                                        animate="open"
                                        variants={variants}
                                        transition={{ type: "spring", duration: 0.3, mass: 1, stiffness: 168.8, damping: 15 }}
                                    >
                                        <NavbarDropDownQuest isHovered={isHovered2} />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                    <img src={ProfileLogo} alt="Profile Logo" className="cursor-pointer" style={{ width: '24px', height: '24px' }} />
                </div>
            </div>
        </div>
    );
};

export default Navbar;