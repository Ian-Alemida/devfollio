import './botao.css'
import React, { useState } from 'react'

function Botao ({link, text, icon1, icon2, isDownload = false}){

    const [isHover, setIsHover] = useState(false);

    const handleHover = () => {
        setIsHover(true);
    }
    const handleHoverLeave = () => {
        setIsHover(false);
    }

    return (
        <a 
            href={link} 
            className='animated-button' 
            target="_blank" 
            rel='noreferrer noopener'
            onMouseLeave={handleHoverLeave}
            onMouseEnter={handleHover}
            download={isDownload ? true : false}
        >
            <span className='span-text'>
                <img className='icon' src={!isHover? icon1 : icon2} alt="" /> 
                {text} 
            </span>
            <span></span>
        </a>
    )
}

export default Botao