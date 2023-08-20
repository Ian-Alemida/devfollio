import './CardTechnology.css';
import React, { useState } from 'react';
import gitIcon from '../images/git.svg'

function CardTechnology () {
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
                <img src={gitIcon} alt="" />
                <h3>Git e GitHub</h3>
                <p>Utilizo o Git como programa de controle de versão das minhas aplicações.</p>
        </div>
    )
}

export default CardTechnology;