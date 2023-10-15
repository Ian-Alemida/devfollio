import React from 'react';
import './slider.css'
import img from "../images/PlanetSky.png"

const ImgSlider = ({ nameProject }) => {
    return (
        <div className='imgSlider' style={{ backgroundImage: `url(${img})`, }}>
            <h3>{nameProject}</h3>
        </div>
    );
}

export default ImgSlider;
