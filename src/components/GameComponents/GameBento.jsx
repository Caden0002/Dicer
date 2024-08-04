import '../../../static/fonts.css';
import GameCard from "./GameCard";

const background = "bg-backgroundColorPrimary"; // Replace with the correct Tailwind class for your primary background color

function GameBento(props) {
    return (
        <div id="GameBento"  className={`relative flex h-full ${background}`}>
            <div className="container max-w-screen-xl mx-auto flex flex-col items-center relative mt-16 z-20">
                <div className="grid sm:grid-cols-2 sm:grid-rows-2 gap-3  p-3 w-full h-full ">
                    <div className="">
                        <GameCard title="Pick4" />
                    </div>
                    <div className="">
                        <GameCard title="Macau" />
                    </div>
                    <div className="">
                        <GameCard title="Nevada" />
                    </div>
                    <div className="">
                        <GameCard title="TaiSai" />
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default GameBento;
