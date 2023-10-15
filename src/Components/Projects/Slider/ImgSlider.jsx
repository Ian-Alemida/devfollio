import React from 'react';
import './slider.css'

const ImgSlider = ({ nameProject, img }) => {
    return (
        <div className='imgSlider' style={{ backgroundImage: `url(${img})`, }}>
            <h3>{nameProject}</h3>
        </div>
    );
}

export default ImgSlider;
