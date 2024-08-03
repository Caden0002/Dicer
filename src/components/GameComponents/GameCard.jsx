import '../../../static/fonts.css';


const backgroundImages = {
    Pick4: 'url("/GameAssets/BentoPick4.png")',
    Macau: 'url("/GameAssets/BentoMacau.png")',
    Nevada: 'url("/GameAssets/BentoNevada.png")',
    TaiSai: 'url("/GameAssets/BentoTaiSai.png")',
};

const gameNames = {
    Pick4: "Pick 4",
    Macau: 'Macau Coinflip',
    Nevada: 'Nevada Skyrocket',
    TaiSai: "TaiSai",
};

const descriptions = {
    Pick4: "Let's roll.",
    Macau: 'Fifty fifty.',
    Nevada: 'Shoot for the stars.',
    TaiSai: "Let's roll.",
};

const textColors = {
    Pick4: '#FFFFFF',
    Macau: '#FFFFFF',
    Nevada: '#FCFF72',
    TaiSai: '#FFFFFF',
};

const buttonColors = {
    Pick4: '#FFFFFF',
    Macau: '#FD2B38',
    Nevada: '#FCFF72',
    TaiSai: '#FD2B38',
};

const button2TextColors = {
    Pick4: '#000000',
    Macau: '#000000',
    Nevada: '#0075FF',
    TaiSai: '#000000',
};

const buttonText1 = "Learn";
const buttonText2 = "Play";

export default function GameCard({ title }) {
    const gameName = gameNames[title];
    const description = descriptions[title];
    const backgroundImage = backgroundImages[title];
    const textColor = textColors[title];
    const buttonColor = buttonColors[title];
    const button2TextColor = button2TextColors[title];

    const cardStyle = {
        backgroundImage: backgroundImage,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        border: '1px solid rgba(255, 255, 255, 0.24)',
        height: '578px',
        borderRadius: '4px',
    };

    const textStyle = {
        color: textColor,
    };

    const button1Style = {
        border: `2px solid ${buttonColor}`,
        width: '100px',
        height: '36px',
        borderRadius: '100px',
        color: buttonColor,
    };

    const button2Style = {
        backgroundColor: buttonColor,
        width: '100px',
        height: '36px',
        borderRadius: '100px',
        color: button2TextColor,
    };

    return (
        <div className="flex justify-center text-center " style={cardStyle}>
            <div className="mt-14">
                <div className="brockmann6" style={textStyle}>{gameName}</div>
                <div className="sfui3 pt-3" style={textStyle}>{description}</div>
                <div className="pt-6 flex justify-center space-x-2">
                    <button className="" style={button1Style}>{buttonText1}</button>
                    <button className="" style={button2Style}>{buttonText2}</button>
                </div>
            </div>
        </div>
    );
}
