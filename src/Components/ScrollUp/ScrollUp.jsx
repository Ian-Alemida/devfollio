import './scrollUp.css'
import React, {useState, useEffect, useCallback} from 'react'

function ScrollUp  () {
    const [isVisible, setIsVisible] = useState(false);//Controla se o botão esta visível
    const [prevScrollY, setPrevScrollY] = useState(0);//Verifica a posição do scroll

    //Função que verifica se o mouse está sendo scrolado para baixo ou para  cima, usei callBack para evitar que um novo objeto de função seja criado a cada renderização.
    const handleScroll = useCallback(() => {
        const currentScrollY = window.scrollY;//verifica a posição do  scrollY
        if (currentScrollY < prevScrollY ) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
        setPrevScrollY(currentScrollY);
    }, [prevScrollY]);

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
        <button className={`scollUp-Btn ${isVisible ? '' : 'visible'}`}
        onClick={scrollToTop}>
            <svg height="3vh" className="scollUp-arrow" viewBox="0 0 512 512"><path d="M246.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L224 109.3 361.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160zm160 352l-160-160c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L224 301.3 361.4 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3z"/></svg>
            <p className="scollUp-text">Back to Top</p>
        </button>
    );
}

export default ScrollUp;