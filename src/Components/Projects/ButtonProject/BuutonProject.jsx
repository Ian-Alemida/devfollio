import './Style.css'
import  React, { useState } from 'react'
import viewIcon from '../images/view.svg'
import viewWitheIcon from '../images/viewWithe.svg'

function ButtonProject () {

    const [isHover, setIsHover] = useState(false);

    const handleHover = () => {
        setIsHover(true);
    }
    const handleHoverLeave = () => {
        setIsHover(false);
    }
    
    return (
        <button className="Btn"
            onMouseEnter={handleHover}
            onMouseLeave={handleHoverLeave}
        >
            <img className='svgIcon' src={isHover ? viewWitheIcon : viewIcon} alt="" />
            <span className="icon2"></span>
            <span className="tooltip">Ver projeto</span>
        </button>
        
    )
}

export default ButtonProject