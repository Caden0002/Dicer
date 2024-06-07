import '../../static/fonts.css';

const background = "bg-backgroundColorPrimary"; // Replace with the correct Tailwind class for your primary background color
const screenHeight = "h-[969px]"; // Use Tailwind's h-screen for full screen height

const header1 = "Jackpots. ";
const header2 = "Rewards";
const header3 = "Let's roll.";

function Catchphrase(props) {
    return (
        <div className={`relative flex ${background} ${screenHeight}`}>
            <div className="container max-w-screen-xl mx-auto flex flex-col justify-center items-center relative">
            <div style={{ paddingBottom: "315px" }}>
                    <div className="brockmann1 text-textColorPrimary flex">
                        {header1}{header2}
                    </div>
                    <div className="brockmann1 text-textColorPrimary flex ">
                    </div>
                    <div className="brockmann1 text-textColorPrimary flex justify-center ">
                        {header3}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Catchphrase;
