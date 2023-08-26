import './Style.css'
import codeIcon from './images/code.svg'
import codeWitheIcon from './images/codeWithe.svg'
import viewIcon from './images/view.svg'
import viewWitheIcon from './images/viewWithe.svg'
import optimusTech from './images/optimusTech.png'
import alurinha from './images/Alurinha.png'
import aluraBooks from './images/AluraBooks.png'
import apeperia from './images/Apeperia.png'
import ButtonProject from './ButtonProject/ButonProject'

function Projects  () {
    return (
        <div className="content-projects">
            <h2>Projetos <br /><hr /></h2>
            {/*Project1*/}
            <div className='content-projects-left'>
                <div className='content-projects-left-text'>
                    <h3>Alura Books</h3>
                    <p>Um projeto responsivo com suporte a diferentes tamanhos de tela. Utilizei o método mobile-first, que consiste em começar o desenvolvimento pelo layout mobile. Também tive acesso a alguns conceitos de JavaScript, quando o utilizei para criar um carrossel na aplicação.</p>
                    <div>
                        <p>HTML5</p>
                        <p>CSS3</p>
                        <p>JavaScript</p>
                    </div>
                    <div>
                        <ButtonProject link="https://github.com/Ian-Alemida/AluraBooks.git" span='ver código' icon1={codeWitheIcon} icon2={codeIcon}></ButtonProject>
                        <ButtonProject link="https://alura-books-gold.vercel.app/" span='ver projeto' icon1={viewWitheIcon} icon2={viewIcon}></ButtonProject>
                    </div>
                </div>
                <div className='content-projects-left-img'>
                    <img src={aluraBooks} alt="imagem do projeto" />
                </div>
            </div>
            {/*Project2*/}
            <div className='content-projects-rigth'>
                <div className='content-projects-rigth-img'>
                    <img src={apeperia} alt="imagem do projeto" />
                </div>
                <div className='content-projects-rigth-text'>
                    <h3>Apeperia</h3>
                    <p>Um projeto responsivo com suporte a diferentes tamanhos de tela. Também tive a  oportunidade de aplicar alguns conceitos de JavaScript, como manipulação de DOM, interação de elementos HTML com forEach e Event Listeners.</p>
                    <div>
                        <p>HTML5</p>
                        <p>CSS3</p>
                        <p>JavaScript</p>
                    </div>
                    <div>
                        <ButtonProject link="https://github.com/Ian-Alemida/Apeperia.git" span='ver código' icon1={codeWitheIcon} icon2={codeIcon}></ButtonProject>
                        <ButtonProject link="https://apeperia-azure.vercel.app/" span='ver projeto' icon1={viewWitheIcon} icon2={viewIcon}></ButtonProject>
                    </div>
                </div>
            </div>
            {/*Project3*/}
            <div className='content-projects-left'>
                <div className='content-projects-left-text'>
                    <h3>Optimus Tech</h3>
                    <p>Site produzido no workshop "7DaysOfCode" se trata de uma pagina de anuncio  de vagas de uma  empresa chamada "Optimus Tech". Pude Treinar conceitos de HTML e CSS, como FlexBox e display Grid.</p>
                    <div>
                        <p>HTML5</p>
                        <p>CSS3</p>
                    </div>
                    <div>
                        <ButtonProject link="https://github.com/Ian-Alemida/OptimusTech.git" span='ver código' icon1={codeWitheIcon} icon2={codeIcon}></ButtonProject>
                        <ButtonProject link="https://optimus-tech-indol.vercel.app/" span='ver projeto' icon1={viewWitheIcon} icon2={viewIcon}></ButtonProject>
                    </div>
                </div>
                <div className='content-projects-left-img'>
                    <img src={optimusTech} alt="imagem do projeto" />
                </div>
            </div>
            {/*Project4*/}
            <div className='content-projects-rigth'>
                <div className='content-projects-rigth-img'>
                    <img src={alurinha} alt="imagem do projeto" />
                </div>
                <div className='content-projects-rigth-text'>
                    <h3>Alurinha cursos</h3>
                    <p>Projeto feito em um dos cursos da Alura com a finalidade de fixar o  conhecimento de flexbox e responsividade para mobile. O projeto consiste em uma das paginas da Alura onde há algumas opções  de curso para o usuario escolher.</p>
                    <div>
                        <p>HTML5</p>
                        <p>CSS3</p>
                    </div>
                    <div>
                        <ButtonProject link="https://github.com/Ian-Alemida/Alurinha.git" span='ver código' icon1={codeWitheIcon} icon2={codeIcon}></ButtonProject>
                        <ButtonProject link="https://alurinha-one.vercel.app/" span='ver projeto' icon1={viewWitheIcon} icon2={viewIcon}></ButtonProject>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects