import React from 'react';
import '../../../static/fonts.css';

import CamaradarieImage from '/GameAssets/QuestCamaraderie.png';
import FlipperImage from '/GameAssets/QuestFlipper.png';
import SputnikImage from '/GameAssets/QuestSputnik.png';
import SoyuzImage from '/GameAssets/QuestSoyuz.png';
import Lucky7Image from '/GameAssets/QuestLucky7.png';

const ViewMoreButtonText = "View all";

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

const NavbarDropDownQuest = ({ isHovered }) => {
    const valueTotal = {
        Camaradarie: 5,
        Flipper: 100,
        Sputnik: 20,
        Soyuz: 300,
        Lucky7: 7
    };

    const currentTotal = {
        Camaradarie: 3,
        Flipper: 89,
        Sputnik: 0,
        Soyuz: 45,
        Lucky7: 3
    };

    const quests = Object.keys(images).slice(0, 3);

    return (
        <React.Fragment>
            <div className="absolute" style={{ height: '30px', width: '300px', top: 'px', left: '-125px', zIndex: '10' }}></div>

            <div className="absolute" style={{ top: '54px', left: '-125px', zIndex: '10' }}>
                {quests.map((quest, index) => (
                    <div key={index} className="flex items-center backdrop-blur-xl mb-2 pl-2 pr-5 pt-1 pb-1"
                         style={{ 
                             backgroundColor: 'rgba(0, 0, 0, 0.6)',
                             width: '300px',
                             height: '72px',
                             border: '1px solid rgba(255, 255, 255, 0.25)',
                             borderRadius: '14px',
                             cursor: 'default'  // Override cursor pointer from parent

                         }}
                    >
                        <img src={images[quest]} alt={quest} className="w-16 h-16 p-2 mr-2" />
                        <div className="flex flex-col justify-center flex-1">
                            <div className="sfui5 text-textColorPrimary">{quest}</div>
                            <div className="flex justify-between">
                                <div className="sfui8 text-textColorSecondary">{descriptions[quest]}</div>
                                <div className="sfui7 text-textColorPrimary">{`${currentTotal[quest]}/${valueTotal[quest]}`}</div>
                            </div>
                        </div>
                           
                    </div>
                    
                ))}
                 <div className="flex justify-end text-textColorPrimary">
                <button className="sfui5 underline">{ViewMoreButtonText}</button>
            </div>
            </div>

        
        </React.Fragment>
    );
};

export default NavbarDropDownQuest;