import CamaradarieImage from '/GameAssets/QuestCamaraderie.png';
import FlipperImage from '/GameAssets/QuestFlipper.png';
import SputnikImage from '/GameAssets/QuestSputnik.png';
import SoyuzImage from '/GameAssets/QuestSoyuz.png';
import Lucky7Image from '/GameAssets/QuestLucky7.png';

const descriptions = {
    Camaradarie: 'Invite 5 friends',
    Flipper: 'Flip 100 coins',
    Sputnik: 'Play Skyrocket 20 times',
    Soyuz: 'Play Skyrocket 300 times',
    Lucky7: 'Win 7 rounds of Pick4'
};

const images = {
    Camaradarie: CamaradarieImage,
    Flipper: FlipperImage,
    Sputnik: SputnikImage,
    Soyuz: SoyuzImage,
    Lucky7: Lucky7Image
};

const colors = {
    Camaradarie: 'rgba(247, 248, 202, 1)',
    Flipper: 'rgba(211, 24, 23, 1)',
    Sputnik: 'rgba(22, 104, 225, 1)',
    Soyuz: 'rgba(200, 50, 218, 1)',
    Lucky7: 'rgba(148, 255, 122, 1)',
};

function QuestProgress({ title, value }) {
    const valueTotal = {
        Camaradarie: 5,
        Flipper: 100,
        Sputnik: 20,
        Soyuz: 300,
        Lucky7: 7
    };

    const width = 154;
    const percentageWidth = (value / valueTotal[title]) * width;
    const color = colors[title];

    return (
        <div className="flex flex-col items-center space-y-2">
            <div className="w-full flex items-center space-x-2">
                <div className="relative h-2 rounded-3xl" style={{ width: `${width}px`, background: 'rgba(61, 61, 72, 1)' }}>
                    <div className="absolute h-2 rounded-3xl" style={{ width: `${percentageWidth}px`, background: color }}></div>
                </div>
            </div>
        </div>
    );
}

export default function QuestCard({ title, value }) {
    
    const image = images[title];
    const description = descriptions[title];

    return (
        <div className="w-50 h-auto flex flex-col justify-center items-center mx-auto ">
            <img src={image} alt={title} className="w-auto h-auto" />
            <div className="py-2 space-y-1 text-center">
                <div className="sfuiQuestCardTitle text-textColorPrimary">
                    {title}
                </div>
                <div className="sfui7 text-textColorTertiary">
                    {description}
                </div>
                <div className="py-2 px-4"  >
                    <QuestProgress title={title} value={value} />
                </div>

            </div>
        </div>
    );
}


