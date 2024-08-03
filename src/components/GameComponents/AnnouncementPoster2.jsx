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
        width: '1170px',
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

    const header1Style = {
        // Add any specific styles for header1 if needed
    };

    const header2Style = {
        fontSize: '36px',
        fontWeight: 300,
        lineHeight: '120%',
    };

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
                <div className="brockmann3 text-textColorPrimary" style={header1Style}>
                    {header1}
                </div>
                <div className="font-SF-UI text-textColorPrimary" style={header2Style}>
                    {header2}
                </div>
                <button style={buttonStyle}>
                    {buttonText}
                </button>
            </div>
        </div>
    );
}
