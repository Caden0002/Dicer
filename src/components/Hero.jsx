import '../../static/fonts.css';
import heroDicerLogo from '/HeroDicerLogo.mp4'; // Import the video file
import heroBackground from '/HeroBackground.mp4'; // Import the video file

const background = "bg-backgroundColorPrimary";

const header1 = "Dicer aims to redefine";
const header2 = "the web3 casino experience.";
const buttonText = "Join waitlist";

function Hero(props) {
    return (
        <div className={`relative min-h-screen flex ${background}`}>
            <video autoPlay loop muted className="absolute inset-0 object-cover w-full h-full z-0">
                <source src={heroBackground} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="container max-w-screen-xl mx-auto flex flex-col justify-center items-center relative z-10">
                <div>
                    <div className="brockmann2 text-textColorPrimary flex justify-start items-center">
                        <video width="76" height="76" autoPlay loop muted className="mr-2">
                            <source src={heroDicerLogo} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        {header1}
                    </div>
                    <div className="brockmann2 text-textColorPrimary flex ml-2">
                        {header2}
                    </div>
                </div>
                <button className="bg-transparent flex justify-center items-center text-textColorPrimary mt-12" style={{ width: "185px", height: "40px", padding: "8px 16px", gap: "4px", borderRadius: "100px", border: "1px solid" }}>
                    <div className="font-SFUI" style={{ fontSize: '18px', fontWeight: 600, lineHeight: '24px', textAlign: 'center' }}>
                        {buttonText}
                    </div>
                </button>
            </div>
        </div>
    );
}

export default Hero;
