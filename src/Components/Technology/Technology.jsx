import './technology.css';
import React, { useState } from 'react';

function Technology (){

    const [isHover, setIsHover] = useState(false);
    const [isAnyHover, setIsAnydHover] = useState(false);
    

    const handleHover = () => {
        setIsHover(true);
        setIsAnydHover(true)
    };
    
    const handleMouseLeave = () => {
        setIsHover(false);
        setIsAnydHover(false)
    };
    
    return(
        <div className="content-technology">
            <h2>Tecnologias</h2>
            <div className='content-technology-r1'>
                <div 
                    className={`technology-card ${isHover ? 'technology-card-hover' : ''} ${isAnyHover ? 'technology-card-not-hover' : ''}`}
                    onMouseEnter={handleHover}
                    onMouseLeave={handleMouseLeave}
                ></div>
                <div 
                    className={`technology-card ${isHover ? 'technology-card-hover' : ''} ${isAnyHover ? 'technology-card-not-hover' : ''}`}
                    onMouseEnter={handleHover}
                    onMouseLeave={handleMouseLeave}
                ></div>  
                <div 
                    className={`technology-card ${isHover ? 'technology-card-hover' : ''} ${isAnyHover ? 'technology-card-not-hover' : ''}`}
                    onMouseEnter={handleHover}
                    onMouseLeave={handleMouseLeave}
                ></div>
                <div 
                    className={`technology-card ${isHover ? 'technology-card-hover' : ''} ${isAnyHover ? 'technology-card-not-hover' : ''}`}
                    onMouseEnter={handleHover}
                    onMouseLeave={handleMouseLeave}
                ></div>              
            </div>
        </div>
    )
}

export default Technology