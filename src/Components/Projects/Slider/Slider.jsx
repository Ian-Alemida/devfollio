import 'bootstrap/dist/css/bootstrap.min.css';
import './slider.css'
import Carousel from 'react-bootstrap/Carousel';
import ImgSlider from './ImgSlider';
import ButtonProject from '../ButtonProject/ButonProject';


function Slider({ isMobile = true, }) {


    return (
        <Carousel>
            <Carousel.Item>
                <ImgSlider></ImgSlider>
                <Carousel.Caption className='carousel-caption'>
                    <h4>Uma aplicação autoral que te permite explorar o cosmos de forma envolvente e descobrir curiosidades fascinantes sobre o sistema solar! Usando Flutter e Dart pude fixar conceitos de Desenvolvimento Cross-Platform, sistema de navegação de rotas com Navigator e arvore de widgets. <small className={isMobile ? '' : 'isMobile'}>OBS: lembre-se de colocar o navegador no modo mobile em inspecionar</small></h4>
                    <div style={{display: 'flex', gap: 50}}>
                        <span>Dart - Flutter</span>
                        <ButtonProject></ButtonProject>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Slider;
