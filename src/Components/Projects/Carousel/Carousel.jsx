import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import img from "../images/PlanetSky.png"

import React from 'react';

const Carousel = () => {
    return (
        <AwesomeSlider animation="cubeAnimation">
            <div data-src="/path/to/image-0.png" />
            <div data-src="/path/to/image-1.png" />
            <div data-src="/path/to/image-2.jpg" />
        </AwesomeSlider>
    );
}

export default Carousel;
