import 'bootstrap/dist/css/bootstrap.min.css';
import './slider.css'
import Carousel from 'react-bootstrap/Carousel';
import ImgSlider from './ImgSlider';
import ButtonProject from '../ButtonProject/ButonProject';


function Slider({ projetos }) {


    return (
        <Carousel style={{ height: '80vh' }}>
            {projetos.map((projeto, indice) => {
                return (
                    <Carousel.Item key={indice} >
                        <ImgSlider nameProject={projeto.nameProject} img={projeto.imgProject} />
                        <Carousel.Caption className='carousel-caption'>
                            <h4>{projeto.text} <small className={projeto.isMobile ? '' : 'isMobile'}>OBS: lembre-se de colocar o navegador no modo mobile em inspecionar</small></h4>
                            <div style={{ display: 'flex', gap: 50 }}>
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
