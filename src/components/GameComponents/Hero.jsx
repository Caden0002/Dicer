import '../../../static/fonts.css';
import dicerLogo from '/GameAssets/HeroDicerLogoGray.svg'; // Import the image file
import GamePageHeroBackground from '/GameAssets/GamePageHeroBackground.png'; // Import the image file

const background = "bg-backgroundColorPrimary";

const header1 = "Featured";
const header2 = "TaiSai";
const header3 = "Game of chance & strategy, multiplayer";
const subheader = "TaiSai is an ancient Chinese dice game known for its simple rules and the variety of bets players can place, making it engaging for both novices and seasoned gamblers.";
const buttonText1 = "Learn";
const buttonText2 = "Play";

function Hero(props) {
    return (
        <div className={`relative h-[90vh] flex ${background}`} style={{ backgroundImage: `url(${GamePageHeroBackground})`, backgroundSize: 'cover', backgroundPosition: '25% 50%' }}>
            <div className="container max-w-screen-xl mx-auto flex flex-col justify-center items-center relative z-10">
                <div className="px-4 md:px-32 grid grid-cols-12 w-full">
                    <div className="col-span-12 sm:col-span-8 md:col-span-4 text-left space-y-11 pt-20">
                        {/* Title and subTitle */}
                        <div className='space-y-4'>
                            <div className="sfui3 text-textColorTertiary flex">
                                <img src={dicerLogo} alt="Dicer Logo" className="mr-3" />
                                {header1}
                            </div>
                            <div className="brockmann3 text-textColorPrimary2">
                                {header2}
                            </div>
                            <div className="sfui3 text-textColorPrimary2">
                                {header3}
                            </div>
                        </div>

                        {/* Description */}
                        <div className="sfui4 text-textColorPrimary2">
                            {subheader}
                        </div>

                        {/* Buttons */}
                        <div className="flex space-x-2">
                            <button className="sfuiGameButton1 text-textColorPrimary2 w-36 h-11 rounded-md" style={{ background: 'rgba(238, 238, 238, 0.25)' }}>
                                {buttonText1}
                            </button>
                            <button className="sfuiGameButton2 bg-textColorPrimary2 text-black w-36 h-11 rounded-md">
                                {buttonText2}
                            </button>
                        </div>
                    </div>
                    {/* Empty columns to fill the remaining grid space */}
                    <div className="col-span-8"></div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
