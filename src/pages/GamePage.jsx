import Navbar from "../components/NavbarComponents/Navbar.jsx";
import Hero from "../components/GameComponents/Hero.jsx";
import QuestBannerSplide from "../components/GameComponents/QuestBannerSplide.jsx";
import GameBento from "../components/GameComponents/GameBento.jsx";
import AnnouncementSplide from "../components/GameComponents/AnnouncementSplide.jsx";
import Footer from "../components/Footer.jsx";

export default function GamePage() {
    return (
        <>
            <Navbar />
            <Hero />
            <QuestBannerSplide />
            <GameBento />
            <AnnouncementSplide />
            <Footer />
        </>
    );
}
