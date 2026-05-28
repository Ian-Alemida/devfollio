import 'bootstrap/dist/css/bootstrap.min.css';
import './slider.css'
import Carousel from 'react-bootstrap/Carousel';
import ImgSlider from './ImgSlider';
import ButtonProject from '../ButtonProject/ButtonProject';

function Slider({ projetos }) {

    return (
        <Carousel
            pause={'hover'}
            fade
            style={{ height: '81vh', width: '102%' }}
        >
            {projetos.map((projeto) => {
                return (
                    <Carousel.Item key={projeto.nameProject} >
                        <ImgSlider nameProject={projeto.nameProject} img={projeto.imgProject} />
                        <Carousel.Caption className='carousel-caption'>
                            <h4>{projeto.text} <small className={projeto.isMobile ? '' : 'isMobile'}>OBS: lembre-se de colocar o navegador no modo mobile em inspecionar</small></h4>
                            <div>
                                <span>{projeto.tecnologias}</span>
                                <ButtonProject linkCode={projeto.linkCode} linkView={projeto.linkView}></ButtonProject>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                )
            })}
        </Carousel>
    );
}

export default Slider;
