import './Projects.css'
import codeIcon from './images/code.svg'
import codeWitheIcon from './images/codeWithe.svg'
import viewIcon from './images/view.svg'
import viewWitheIcon from './images/viewWithe.svg'
import optimusTech from './images/optimusTech.png'
import ButtonProject from './ButtonProject/ButonProject'

function Projects  () {
    return (
        <div className="content-projects">
            <h2>Projetos <br /><hr /></h2>
            <div className='content-projects-left'>
                <div className='content-projects-left-text'>
                    <h3>Optimus Tech</h3>
                    <p>Site produzido no workshop "7DaysOfCode" se trata de uma pagina de anuncio  de vagas de uma  empresa chamada "Optimus Tech". Pude Treinar conceitos de HTML e CSS, como FlexBox e display Grid</p>
                    <div>
                        <p>HTML5</p>
                        <p>CSS3</p>
                    </div>
                    <div>
                        <ButtonProject span='ver codigo' icon1={codeWitheIcon} icon2={codeIcon}></ButtonProject>
                        <ButtonProject span='ver projeto' icon1={viewWitheIcon} icon2={viewIcon}></ButtonProject>
                    </div>
                </div>
                <div className='content-projects-left-img'>
                    <img src={optimusTech} alt="imagem do projeto" />
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