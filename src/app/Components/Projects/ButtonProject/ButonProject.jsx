import './buttonProject.css'
import React, { useState } from 'react'
import codeIcon from '../images/code.svg'
import codeWitheIcon from '../images/codeWithe.svg'
import viewIcon from '../images/view.svg'
import viewWitheIcon from '../images/viewWithe.svg'
import Image from 'next/image'

function ButtonProject({ linkCode, linkView }) {

    const [isHover, setIsHover] = useState(false);

    const handleHover = () => {
        setIsHover(true);
    }
    const handleHoverLeave = () => {
        setIsHover(false);
    }

    return (
        <div className='btns'>
            <a href={linkCode} target="_blank" rel='noreferrer noopener'>
                <button className="Btn"
                    onMouseEnter={handleHover}
                    onMouseLeave={handleHoverLeave}
                >
                    <Image className='svgIcon' src={isHover ? codeWitheIcon : codeIcon} alt="icon button" />
                    <small className="tooltipp">ver código</small>
                </button>
            </a>
            <a href={linkView} target="_blank" rel='noreferrer noopener'>
                <button className="Btn"
                    onMouseEnter={handleHover}
                    onMouseLeave={handleHoverLeave}
                >
                    <Image className='svgIcon' src={isHover ? viewWitheIcon : viewIcon} alt="icon button" />
                    <small className="tooltipp">Ver projeto</small>
                </button>
            </a>
        </div>
    )
}

export default ButtonProject