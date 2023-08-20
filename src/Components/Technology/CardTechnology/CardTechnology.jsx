import './CardTechnology.css';
import React, { useState } from 'react';

function CardTechnology (props) {
    const [isHover, setIsHover] = useState(false)

    const handleHover = () => {
        setIsHover(true);
        document.querySelectorAll('.technology-card').forEach(card => {
            card.classList.add('technology-card-not-hover')
        })
    }

    const handleMouseLeave = () => {
        setIsHover(false);
        document.querySelectorAll('.technology-card').forEach( card => {
            card.classList.remove('technology-card-not-hover')
        })
    }

    return(
        <div 
            className={`technology-card ${isHover ? 'technology-card-hover' : ''} `}
            onMouseEnter={handleHover}
            onMouseLeave={handleMouseLeave}>
                <img className={`${isHover ? 'flipped' : ''}`} src={props.img} alt="" />
                <h3>{props.h3}</h3>
                <p>{props.text}</p>
        </div>
    )
}

export default CardTechnology;