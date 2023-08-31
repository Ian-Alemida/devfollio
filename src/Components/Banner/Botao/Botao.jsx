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
        <a href={props.link} className='animated-button' target="_blank" rel='noreferrer noopener'>
                <span className='span-text'><img className='icon' src={isHover? props.icon : props.icon2} alt="" /> {props.text} </span>
                <span></span>
        </a>
    )
}

export default Botao