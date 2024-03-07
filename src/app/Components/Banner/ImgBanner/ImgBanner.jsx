'use client';
import './imgBanner.css'
import image from '../images/banner_image.svg'
import React, { useRef } from "react"
import Image from 'next/image'

function ImgBanner () {
    const imageRef = useRef(null)

    const handleMouseMove = (e) => {
        const image = imageRef.current;
        const { left, top, width, height } = image.getBoundingClientRect();
        const mouseX = e.clientX - left;
        const mouseY = e.clientY - top;
        
        // Calcula o deslocamento
        const rotateX = (mouseY / width - .6) * 30; 
        const rotateY = (mouseX / height - .6) * 20; 
    
        // Aplique o deslocamento à imagem
        image.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const handleMouseLeave = () => {
        const image = imageRef.current;
        image.style.transform = 'rotateX(0deg) rotateY(0deg)';
    };

    return ( 
        <div className='content-img'
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}>
            <Image src={image} className='img' alt="Imagem vetorial" 
            ref={imageRef}/>
        </div>
    );
}

export default ImgBanner;