// App.jsx

import React from 'react';
import JoinButtonParent from "./components/JoinButtonParent.jsx";
import Hero from "./components/Hero.jsx";
import Catchphrase from "./components/Catchphrase.jsx";
import Poster from "./components/Poster.jsx";
import Message from "./components/Message.jsx";
import Winning from "./components/Winning.jsx";
import Footer from "./components/Footer.jsx";

import AnimationHero from "./components/AnimationHero.jsx";
import AnimationPosterPhrase from "./components/AnimationPosterPhrase.jsx";
import AnimationMessage from "./components/AnimationMessage.jsx";


export default function App() {
    return (
        <>
            <JoinButtonParent />

            {/* <Hero /> */}
            <AnimationHero />

            <Catchphrase />

            {/* <Poster /> */}
            <AnimationPosterPhrase />


            {/* <Message /> */}
            <AnimationMessage />

            <Winning />
            <Footer />
        </>
    );
}
