import './technology.css'
import React, { useState } from 'react';

function Technology (){

    let [isHover, setIsHover] = useState(false);
    return(
        <div className="content-technology">
            <h2>Tecnologias</h2>
            <ul className='content-technology-r1'>
                <li className='technology-card'></li>
                <li className='technology-card'></li>
                <li className='technology-card'></li>
                <li className='technology-card'></li>                
            </ul>
        </div>
    )
}

export default Technology