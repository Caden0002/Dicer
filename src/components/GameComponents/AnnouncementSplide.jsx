import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import AnnouncementPoster1 from './AnnouncementPoster1.jsx';
import AnnouncementPoster2 from './AnnouncementPoster2.jsx';
import AnnouncementPoster3 from './AnnouncementPoster3.jsx';

import '../../../styles.css'

const AnnouncementSplide = () => {

const options = {
    fixedWidth: '83vw', // Fixed width for each slide
    type: 'loop',
    perPage: 1,
    focus: 'center',
    pagination: true,
    gap: '12px',
    drag: true,
    start: 1,
    arrows: false,
    autoplay: true,
    interval: 2000, // Change this to the desired interval in milliseconds
    pauseOnHover: false,
};

    return (
        <div style={{ background: 'black' }}>
            <Splide options={options} >
                <SplideSlide>
                    <AnnouncementPoster1 />
                </SplideSlide>
                <SplideSlide>
                    <AnnouncementPoster2 />
                </SplideSlide>
                <SplideSlide>
                    <AnnouncementPoster3 />
                </SplideSlide>
            </Splide>
        </div>
    );
};

export default AnnouncementSplide;
