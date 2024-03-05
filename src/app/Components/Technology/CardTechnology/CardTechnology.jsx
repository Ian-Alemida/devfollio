import './CardTechnology.css';
import React, { useState } from 'react';
import Image from 'next/image'

function CardTechnology ({img, h3, text}) {
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
                <div className='technology-card-img'>
                    <Image className={`${isHover ? 'flipped' : ''}`} src={img} alt="" />
                    <div className={h3 === 'Next.JS' ? 'technology-card-img-div' : 'technology-card-img-div-hid technology-card-img-div'}></div>
                </div>
                <h3>{h3}</h3>
                <p>{text}</p>
        </div>
    )
}

export default CardTechnology;