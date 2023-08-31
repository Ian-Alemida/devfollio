import './botao.css'
import React, { useState } from 'react'

function Botao (props){

    const [isHover, setIsHover] = useState(false);

    const handleHover = () => {
        setIsHover(true);
    }
    const handleHoverLeave = () => {
        setIsHover(false);
    }

    return (
        <a href={props.link} className='animated-button' target="_blank" rel='noreferrer noopener'
        onMouseLeave={handleHoverLeave}
        onMouseEnter={handleHover}>
                <span className='span-text'><img className='icon' src={!isHover? props.icon1 : props.icon2} alt="" /> {props.text} </span>
                <span></span>
        </a>
    )
}

export default Botao