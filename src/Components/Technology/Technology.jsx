import './technology.css';
import React, { useState } from 'react';

function Technology (){
    const [isHover, setIsHover] = useState(false);
    const [isAnyHover, setIsAnyHover] = useState(false);
    
    const handleHover = () => {
        setIsHover(true);
        document.querySelectorAll('.technology-card').forEach(card => {
            card.className.add('technology-card-not-hover')
        })
    };
    
    const handleMouseLeave = () => {
        setIsHover(false);
    };
    
    return(
        <div className="content-technology">
            <h2>Tecnologias</h2>
            <div className='content-technology-r1'>
                <div 
                    className={`technology-card ${isHover ? 'technology-card-hover' : ''} `}
                    onMouseEnter={handleHover}
                    onMouseLeave={handleMouseLeave}
                ></div>
                <div 
                    className={`technology-card ${isHover ? 'technology-card-hover' : ''} `}
                    onMouseEnter={handleHover}
                    onMouseLeave={handleMouseLeave}
                ></div>  
                <div 
                    className={`technology-card ${isHover ? 'technology-card-hover' : ''} `}
                    onMouseEnter={handleHover}
                    onMouseLeave={handleMouseLeave}
                ></div>
                <div 
                    className={`technology-card ${isHover ? 'technology-card-hover' : ''} `}
                    onMouseEnter={handleHover}
                    onMouseLeave={handleMouseLeave}
                ></div>              
            </div>
        </div>
    )
}

export default Technology