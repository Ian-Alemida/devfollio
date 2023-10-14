import './buttonProject.css'
import React, { useState } from 'react'
import codeIcon from './images/code.svg'
import codeWitheIcon from './images/codeWithe.svg'
import viewIcon from './images/view.svg'
import viewWitheIcon from './images/viewWithe.svg'

function ButtonProject({ link }) {

    const [isHover, setIsHover] = useState(false);

    const handleHover = () => {
        setIsHover(true);
    }
    const handleHoverLeave = () => {
        setIsHover(false);
    }

    return (
        <>
            <a href={link} target="_blank" rel='noreferrer noopener'>
                <button className="Btn"
                    onMouseEnter={handleHover}
                    onMouseLeave={handleHoverLeave}
                >
                    <img className='svgIcon' src={isHover ? codeIcon : codeWitheIcon} alt="icon button" />
                    <span className="tooltip">ver código</span>
                </button>
            </a>
            <a href={link} target="_blank" rel='noreferrer noopener'>
                <button className="Btn"
                    onMouseEnter={handleHover}
                    onMouseLeave={handleHoverLeave}
                >
                    <img className='svgIcon' src={isHover ? viewIcon : viewWitheIcon} alt="icon button" />
                    <span className="tooltip">Ver projeto</span>
                </button>
            </a>
        </>
    )
}

export default ButtonProject