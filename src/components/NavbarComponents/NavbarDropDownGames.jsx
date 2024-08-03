import React from 'react';
import Macau from '/GameAssets/NavbarMacau.png';
import TaiSai from '/GameAssets/NavbarTaiSai.png';
import Pick4 from '/GameAssets/NavbarPick4.png';
import Nevada from '/GameAssets/NavbarNevada.png';

const NavbarDropDownGames = ({ isHovered }) => {
    if (!isHovered) return null;

    return (
        <React.Fragment>
            <div className="absolute" style={{ height: '30px', width: '228px', top: 'px', left: '-79px', zIndex: '10' }}></div>
            <div className="absolute border" style={{ background: 'rgba(4, 4, 5, 0.6)', width: '228px', height: '190px', borderRadius: '14px', borderColor: 'rgba(255, 255, 255, 0.25)', left: '-79px', top: '54px', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gridGap: '4px', padding: '4px' }}>
                <div className="relative bg-cover bg-center h-full">
                    <img 
                        src={Macau} 
                        alt="Macau" 
                        className="game-image focus:scale-80" 
                    />
                </div>
                <div className="relative bg-cover bg-center h-full">
                    <img 
                        src={TaiSai} 
                        alt="TaiSai" 
                        className="game-image" 
                    />
                </div>
                <div className="relative bg-cover bg-center h-full">
                    <img 
                        src={Pick4} 
                        alt="Pick4" 
                        className="game-image" 
                    />
                </div>
                <div className="relative bg-cover bg-center h-full">
                    <img 
                        src={Nevada} 
                        alt="Nevada" 
                        className="game-image" 
                    />
                </div>
            </div>
        </React.Fragment>
    );
};

export default NavbarDropDownGames;
