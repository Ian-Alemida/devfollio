'use client';
import './scrollUp.css'
import React, {useState, useEffect, useCallback, useRef} from 'react'

function ScrollUp  () {
    const [isVisible, setIsVisible] = useState(false);
    const prevScrollYRef = useRef(0);

    const handleScroll = useCallback(() => {
        const currentScrollY = window.scrollY;
        if (currentScrollY < prevScrollYRef.current) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
        prevScrollYRef.current = currentScrollY;
    }, []);

    //Scrola para o topo da pagina com uma animação suave
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    //efeito que sera executado sempre que a função  handleScroll for ativada
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [handleScroll]);

    return ( 
        <button className={`scrollUp-Btn ${isVisible ? '' : 'visible' }`}
        onClick={scrollToTop}>
            <svg height="3vh" className="scrollUp-arrow" viewBox="0 0 512 512"><path d="M246.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L224 109.3 361.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160zm160 352l-160-160c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L224 301.3 361.4 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3z"/></svg>
            <p className="scrollUp-text">Back to Top</p>
        </button>
    );
}

export default ScrollUp;