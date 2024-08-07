import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../../../static/fonts.css';
import DicerLogo from '/GameAssets/DicerLogoWhite.svg';
import ProfileLogo from '/GameAssets/NavbarProfile.svg';
import NavbarDropDownGames from './NavbarDropDownGames';
import NavbarDropDownQuest from './NavbarDropDownQuest';

const Navbar = () => {
    const [isHovered1, setIsHovered1] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false); // State for navLink2

    // Define animation variants
    const variants = {
        open: { opacity: 1 }, 
        closed: { opacity: 0 },
    };

    return (
        <div className="mt-6 fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
            <div className="mx-auto backdrop-blur-xl rounded-2xl pointer-events-auto" style={{ background: 'rgba(4, 4, 5, 0.6)', border: '1px solid rgba(255, 255, 255, 0.25)' }}>
                <div className="inline-flex justify-center items-center sfuiNavbarLinks cursor-pointer text-textColorSecondary px-4 space-x-11">
    <Link to="/" className="cursor-pointer">
        <img src={DicerLogo} alt="Dicer Logo" style={{ width: '18px', height: '18px' }} />
    </Link>                    <div
                        className="py-4 hover:text-textColorPrimary relative group"
                        onMouseEnter={() => setIsHovered1(true)}
                        onMouseLeave={() => setIsHovered1(false)}
                    >
                        <Link to="/games" className="relative group">
                            Games
                        </Link>
                        <AnimatePresence>
                            {isHovered1 && (
                                <motion.div
                                    initial="closed"
                                    animate="open"
                                    variants={variants}
                                    transition={{ type: "spring", duration: 0.3, mass: 1, stiffness: 168.8, damping: 15 }}
                                >
                                    <NavbarDropDownGames isHovered={isHovered1} />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <div
                        className="hidden sm:block  py-4 hover:text-textColorPrimary relative group "
                        onMouseEnter={() => setIsHovered2(true)}
                        onMouseLeave={() => setIsHovered2(false)}
                    >
                        <Link to="/quest" className="relative group">
                            Quests
                        </Link>
                        <AnimatePresence>
                            {isHovered2 && (
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

                    <div className="py-4 hover:text-textColorPrimary">
                        <Link to="/referral">
                            Referral
                        </Link>
                    </div>

                    <Link to="/profile">
                        <img src={ProfileLogo} alt="Profile Logo" className="cursor-pointer" style={{ width: '24px', height: '24px' }} />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
