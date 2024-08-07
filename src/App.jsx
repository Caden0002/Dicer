import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Make sure to import the correct dependencies
import LandingPage from "./pages/LandingPage.jsx";
import GamePage from "./pages/GamePage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";



export default function App() {



    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/games" element={<GamePage />} />
                <Route path="/profile" element={<ProfilePage />} />
            </Routes>
        </Router>
    );
}
