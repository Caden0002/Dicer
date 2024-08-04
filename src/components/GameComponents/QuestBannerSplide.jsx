import React, { useState, useEffect } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import '../../../static/fonts.css';
import QuestCard from "./QuestCard";
import ViewMoreArrow from "/GameAssets/QuestViewMoreButtonArrow.svg"; // Adjust the import path if needed

const ViewMoreButtonText = "View more";

const background = "bg-backgroundColorPrimary"; // Replace with the correct Tailwind class for your primary background color

function useIsMobile() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 576);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 576);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return isMobile;
}

function QuestBanner() {
    const isMobile = useIsMobile();

    const splideOptions = {
        rewind: false,
        fixedWidth: '186px', // Fixed width for each slide
        gap: '48px', // Gap between slides
        arrows: false, // Disable arrows
        pagination: false, // Disable pagination
        wheel: true, // Enable wheel scrolling
        releaseWheel: true, // Enable wheel scrolling
        wheelMinThreshold: 5, // Adjust threshold for smoother wheel scrolling
        wheelSleep: 100, // Adjust sleep time for more staggered natural wheel scrolling
    };

    return (
        <div id="QuestBanner" className={`relative flex h-full ${background}`}>
            <div className="container max-w-screen-xl mx-auto p-6 flex flex-col relative z-20 overflow-x-hidden">
                {isMobile ? (
                    <>
                        <div className="flex justify-between items-center mb-16">
                            <div className="brockmannS text-white">Achievements</div>
                            <button className="flex items-center space-x-4">
                                <div className="sfuiQuestCardTitle" style={{ color: 'rgba(209, 224, 255, 1)' }}>
                                    {ViewMoreButtonText}
                                </div>
                                <img src={ViewMoreArrow} alt="View More Arrow" />
                            </button>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <QuestCard title="Camaradarie" value={5} />
                            <QuestCard title="Flipper" value={50} />
                            <QuestCard title="Sputnik" value={10} />
                            <QuestCard title="Lucky7" value={1} />
                        </div>
                    </>
                ) : (
                    <Splide options={splideOptions}>
                        <SplideSlide>
                            <QuestCard title="Camaradarie" value={5} />
                        </SplideSlide>
                        <SplideSlide>
                            <QuestCard title="Flipper" value={50} />
                        </SplideSlide>
                        <SplideSlide>
                            <QuestCard title="Sputnik" value={10} />
                        </SplideSlide>
                        <SplideSlide>
                            <QuestCard title="Camaradarie" value={4} />
                        </SplideSlide>
                        <SplideSlide>
                            <QuestCard title="Lucky7" value={1} />
                        </SplideSlide>
                        <SplideSlide>
                            <QuestCard title="Soyuz" value={100} />
                        </SplideSlide>
                        <SplideSlide>
                            <QuestCard title="Flipper" value={20} />
                        </SplideSlide>
                        <SplideSlide>
                            <QuestCard title="Sputnik" value={12} />
                        </SplideSlide>
                        <SplideSlide>
                            <button className="flex items-center space-x-4" style={{ width: '154px', height: '268.516px' }}>
                                <div className="sfuiQuestCardTitle" style={{ color: 'rgba(209, 224, 255, 1)' }}>
                                    {ViewMoreButtonText}
                                </div>
                                <img src={ViewMoreArrow} alt="View More Arrow" />
                            </button>
                        </SplideSlide>
                    </Splide>
                )}
            </div>
        </div>
    );
}

export default QuestBanner;
