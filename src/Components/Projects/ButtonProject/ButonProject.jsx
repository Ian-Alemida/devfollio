import './buttonProject.css'
import React, { useState } from 'react'
import codeIcon from '../images/code.svg'
import codeWitheIcon from '../images/codeWithe.svg'
import viewIcon from '../images/view.svg'
import viewWitheIcon from '../images/viewWithe.svg'

function ButtonProject({ linkCode, linkView }) {

    const [isHover, setIsHover] = useState(false);

    const handleHover = () => {
        setIsHover(true);
    }
    const handleHoverLeave = () => {
        setIsHover(false);
    }

    return (
        <>
            <a href={linkCode} target="_blank" rel='noreferrer noopener'>
                <button className="Btn"
                    onMouseEnter={handleHover}
                    onMouseLeave={handleHoverLeave}
                >
                    <img className='svgIcon' src={isHover ? codeWitheIcon : codeIcon} alt="icon button" />
                    <span className="tooltip">ver código</span>
                </button>
            </a>
            <a href={linkView} target="_blank" rel='noreferrer noopener'>
                <button className="Btn"
                    onMouseEnter={handleHover}
                    onMouseLeave={handleHoverLeave}
                >
                    <img className='svgIcon' src={isHover ? viewWitheIcon : viewIcon} alt="icon button" />
                    <span className="tooltip">Ver projeto</span>
                </button>
            </a>
        </>
    )
}

export default ButtonProject