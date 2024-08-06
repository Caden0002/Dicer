import JoinButtonParent from "../components/LandingComponents/JoinButtonParent.jsx";
import Catchphrase from "../components/LandingComponents/Catchphrase.jsx";
import Winning from "../components/LandingComponents/Winning.jsx";
import Footer from "../components/Footer.jsx";
import AnimationHero from "../components/LandingComponents/AnimationHero.jsx";
import AnimationMessage from "../components/LandingComponents/AnimationMessage.jsx";
import AnimationPoster from "../components/LandingComponents/AnimationPoster.jsx";



export default function LandingPage() {
    return (
        <>
            <JoinButtonParent />
            <AnimationHero />
            <Catchphrase />
            <AnimationPoster />
            <AnimationMessage />
            <Winning />
            <Footer />
        </>
    );
}
