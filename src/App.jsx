// App.jsx

import React from 'react';
import JoinButton from "./components/JoinButton.jsx";
import Hero from "./components/Hero.jsx";
import Catchphrase from "./components/Catchphrase.jsx";
import Poster from "./components/Poster.jsx";
import Message from "./components/Message.jsx";
import Winning from "./components/Winning.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
    return (
        <>
            <JoinButton />
            <Hero />
            <Catchphrase />
            <Poster />
            <Message />
            <Winning />
            <Footer />
        </>
    );
}
