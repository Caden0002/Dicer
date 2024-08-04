import '../../../static/fonts.css';
import backgroundImage from '/GameAssets/AnnouncementLiveBackground.png';

const header1 = "Dicer Live Event";
const header2 = "Join us in Singapore on 9/21";
const buttonText = "Learn more";

export default function AnnouncementPoster2() {
      const wrapperStyle = {
        border: '1px solid rgba(255, 255, 255, 0.24)',
        borderRadius: '4px',
        overflow: 'hidden', // Ensures border radius is applied correctly
        width: '80vw', // Changed to 80% of viewport width
        height: '578px',
    };

    const posterStyle = {
       backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100%',
    };

      const header1Style = 'text-5xl md:text-6xl font-semibold leading-tight';
    const header2Style = 'text-lg md:text-2xl font-light leading-normal';

    const buttonStyle = {
        border: '2px solid #FFFFFF',
        width: '126px',
        height: '42px',
        borderRadius: '100px',
        color: '#FFFFFF',
        backgroundColor: 'transparent',
        cursor: 'pointer',
    };

    return (
        <div className="flex flex-col justify-center items-center snap-center" style={wrapperStyle}>
            <div className="flex flex-col justify-center items-center text-center space-y-4" style={posterStyle}>
        <div className={`font-Brockmann text-textColorPrimary ${header1Style}`}>
            {header1}
        </div>
        <div className={`font-SF-UI text-textColorPrimary ${header2Style}`}>
            {header2}
        </div>
                <button style={buttonStyle}>
                    {buttonText}
                </button>
            </div>
        </div>
    );
}
