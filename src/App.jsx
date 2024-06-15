// App.jsx

import React from 'react';
import JoinButtonParent from "./components/JoinButtonParent.jsx";

import Hero from "./components/Hero.jsx";
import AnimationHero from "./components/AnimationHero.jsx";

import Catchphrase from "./components/Catchphrase.jsx";
import Poster from "./components/Poster.jsx";
import Message from "./components/Message.jsx";
import Winning from "./components/Winning.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
    return (
        <>

            <JoinButtonParent />
            {/* <Hero /> */}
                        <AnimationHero />

            <Catchphrase />
            <Poster />
            <Message />
            <Winning />
            <Footer />
        </>
    );
}
