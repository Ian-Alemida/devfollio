import './buttonProject.css'
import  React, { useState } from 'react'

function ButtonProject (props) {

    const [isHover, setIsHover] = useState(false);

    const handleHover = () => {
        setIsHover(true);
    }
    const handleHoverLeave = () => {
        setIsHover(false);
    }
    
    return (
        <a href={props.link} target="_blank" rel='noreferrer noopener'>
            <button className="Btn"
            onMouseEnter={handleHover}
            onMouseLeave={handleHoverLeave}
            >
                <img className='svgIcon' src={isHover ? props.icon1 : props.icon2} alt="icon button" />
                <span className="icon2"></span>
                <span className="tooltip">{props.span}</span>
            </button>
        </a>        
    )
}

export default ButtonProject