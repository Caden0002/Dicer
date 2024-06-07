import '../../static/fonts.css';
import BackgroundVideo from '/WinningBackgroundVideo.mp4'; // Import the video file
import WinningBackgroundDeco from '/WinningBackgroundDeco.svg'; // Import the background image

const background = "bg-backgroundColorPrimary"; // Replace with the correct Tailwind class for your primary background color
const screenHeight = "h-[969px]"; // Use Tailwind's h-screen for full screen height

const header1 = "It’s the";
const header2 = "winning";
const header3 = "that counts";

const subheader = (
    <>
        Accumulate <span style={{ color: '#FFFFFF' }}>points</span>, 
        compete in the <span style={{ color: '#FFFFFF' }}>leaderboard</span>, 
        and     <br />
        win <span style={{ color: '#FFFFFF' }}>lottery prizes</span>.
        We have something for everyone.
    </>
);

function Winning(props) {
    return (
        <div className={`relative flex ${background} ${screenHeight}`}>
            <video autoPlay loop muted className="absolute inset-x-0 bottom-0 w-full object-cover z-0">
                <source src="/WinningBackgroundVideo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <img src={WinningBackgroundDeco} alt="Background Decoration" className="absolute z-10 w-full h-full z-10"/>

            <div className="container max-w-screen-xl mx-auto flex flex-col justify-center items-center relative">
                <div style={{ paddingBottom: "300px" }}>
                    <div className="brockmann5 text-textColorPrimary flex justify-center items-center leading-tight">
                        <div>{header1}</div>
                        <div style={{
                            background: '-webkit-linear-gradient(180deg, #FE5E26 0%, #FF0000 20%, #FFE500 100%)',
                            WebkitBackgroundClip: 'text',
                            backgroundClip: 'text',
                            color: 'rgba(255, 255, 255, 0.4)', // Transparent white color with 40% opacity
                        }}>
                            &nbsp;{header2}
                        </div>
                        <div>&nbsp;{header3}</div>
                    </div>
                    <div className="sfui2 mt-11 text-textColorSecondary justify-center whitespace-pre-line ">
                        {subheader}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Winning;
