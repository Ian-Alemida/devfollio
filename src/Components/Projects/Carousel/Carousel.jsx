import 'bootstrap/dist/css/bootstrap.min.css';
import './carousel.css'
import img from "../images/PlanetSky.png"
import Carousel from 'react-bootstrap/Carousel';

function Slider() {
    return (
        <Carousel>
            <Carousel.Item>
                <img src={img} alt="" srcset="" />
                <Carousel.Caption className='carousel-caption'>
                    <h4>Uma aplicação autoral que te permite explorar o cosmos de forma envolvente e descobrir curiosidades fascinantes sobre o sistema solar! Usando Flutter e Dart pude fixar conceitos de Desenvolvimento Cross-Platform, sistema de navegação de rotas com Navigator e arvore de widgets. <small>OBS: lembre-se de colocar o navegador no modo mobile em inspecionar</small></h4>
                    <span>Dart - Flutter</span>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Slider;
