import './Projects.css'
import code from './images/code.svg'
import view from './images/view.svg'
import optimusTech from './images/optimusTech.png'

function Projects  () {
    return (
        <div className="content-projects">
            <h2>Projetos <br /><hr /></h2>
            <div className='content-projects-left'>
                <div className='content-projects-left-text'>
                    <h3>Optimus Tech</h3>
                    <p>Site produzido no workshop "7DaysOfCode" se trata de uma pagina de anuncio  de vagas de uma  empresa cchamada "Optimus Tech". Pude Treinar conceitos de HTML e CSS,  como FlexBox e e display  Grid</p>
                    <div>
                        <p>HTML5</p>
                        <p>CSS3</p>
                    </div>
                    <div>
                        <button>
                            <a href="">
                                <img src={code} alt="" />
                            </a>
                        </button>
                        <button>
                            <a href="">
                                <img src={view} alt="" />
                            </a>
                        </button>
                    </div>
                </div>
                <div className='content-projects-left-img'>
                    <img src={optimusTech} alt="" />
                </div>
            </div>
            <div className='content-projects-left'>
                <div className='content-projects-rigth-img'>

                </div>
                <div className='content-projects-rigth-text'>
                    <h3></h3>
                    <p></p>
                    <div>
                        <p></p>
                        <p></p>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default Projects