import './projects.css'
import codeIcon from './images/code.svg'
import codeWitheIcon from './images/codeWithe.svg'
import viewIcon from './images/view.svg'
import viewWitheIcon from './images/viewWithe.svg'
import loginScreen from './images/telaLogin.png'
import aluraBooks from './images/AluraBooks.png'
import alurinha from './images/Alurinha.png'
import apeperia from './images/Apeperia.png'
import optimusTech from './images/optimustech.png'
import planetSky from './images/PlanetSky.png'
import ButtonProject from './ButtonProject/ButonProject'


function Projects () {
    return (
        <div className="content-projects" id='Projects'>
            <h2>Projetos <br /><hr /></h2>
            {/*Project1*/}
            <div className='content-projects-left'>
                <div className='content-projects-left-text'>
                    <h3>Planet Sky</h3>
                    <p>Uma aplicação autoral que te permite explorar o cosmos de forma envolvente e descobrir curiosidades fascinantes sobre o sistema solar! Usando Flutter e Dart pude fixar conceitos de Desenvolvimento <strong>Cross-Platform</strong>, sistema de navegação de rotas com <strong>Navigator</strong> e <strong>arvore de widgets</strong>.</p>
                    <small><strong>OBS: </strong>lembre-se de colocar o navegador no modo mobile em inspecionar</small>
                    <div>
                        <p>Dart</p>
                        <p>Flutter</p>
                    </div>
                    <div>
                        <ButtonProject link="https://github.com/Ian-Alemida/planet_sky" span='ver código' icon1={codeWitheIcon} icon2={codeIcon}></ButtonProject>
                        <hr />
                        <ButtonProject link="https://planet-sky-5plu.vercel.app/#/initial" span='ver projeto' icon1={viewWitheIcon} icon2={viewIcon}></ButtonProject>
                    </div>
                </div>
                <div className='content-projects-left-img'>
                    <img src={planetSky} alt="imagem do projeto" />
                </div>
            </div>
            {/*Project2*/}
            <div className='content-projects-rigth'>
                <div className='content-projects-rigth-img'>
                    <img src={aluraBooks} alt="imagem do projeto" />
                </div>
                <div className='content-projects-rigth-text'>
                    <h3>Alura Books</h3>
                    <p>Um projeto <strong>responsivo</strong> com suporte a diferentes tamanhos de tela, se trata de uma pagina completa onde você pode escolher alguns livros de estudo. Utilizei o método <strong>mobile-first</strong>, que consiste em começar o desenvolvimento pelo layout mobile. Também tive acesso a alguns conceitos de <strong>JavaScript</strong>, quando o utilizei para criar um <strong>Carrossel</strong> na aplicação.</p>
                    <div>
                        <p>HTML5</p>
                        <p>CSS3</p>
                        <p>JavaScript</p>
                    </div>
                    <div className='content-projects-rigth-text-button'>
                        <ButtonProject link="https://github.com/Ian-Alemida/AluraBooks.git" span='ver código' icon1={codeWitheIcon} icon2={codeIcon}></ButtonProject>
                        <ButtonProject link="https://alura-books-gold.vercel.app/" span='ver projeto' icon1={viewWitheIcon} icon2={viewIcon}></ButtonProject>
                    </div>
                </div>
            </div>
            {/*Project3*/}
            <div className='content-projects-left'>
                <div className='content-projects-left-text'>
                    <h3>Tela de Login</h3>
                    <p>Aplicação autoral desenvolvida Usando  <strong>Flutter e Dart</strong>, se trata de uma tela de login com validação. Pude utilizar conceitos de componentização de <strong>widgets</strong> para criar partes da tela e me aprofundar na lógica do Dart, criando um <strong>método</strong> que valida o login e senha utilizando, <strong>controller, keys e RegEx</strong>.</p>
                    <small><strong>OBS: </strong>lembre-se de colocar o navegador no modo mobile em inspecionar</small>
                    <div>
                        <p>Dart</p>
                        <p>Flutter</p>
                    </div>
                    <div className='content-projects-left-text-button'>
                        <ButtonProject link="https://github.com/Ian-Alemida/tela_login.git" span='ver código' icon1={codeWitheIcon} icon2={codeIcon}></ButtonProject>
                        <hr />
                        <ButtonProject link="https://tela-login-mg1z.vercel.app/" span='ver projeto' icon1={viewWitheIcon} icon2={viewIcon}></ButtonProject>
                    </div>                  
                </div>
                <div className='content-projects-left-img'>
                    <img src={loginScreen} alt="imagem do projeto"/>
                </div>
            </div>
            {/*Project4*/}
            <div className='content-projects-rigth'>
                <div className='content-projects-rigth-img'>
                    <img src={apeperia} alt="imagem do projeto"/>
                </div>
                <div className='content-projects-rigth-text'>
                    <h3>Apeperia</h3>
                    <p>Um projeto <strong>responsivo</strong> com suporte a diferentes tamanhos de tela, se trata de uma pagina onde você pode encomendar aplicativos do jeito que precisar. Também tive a  oportunidade de aplicar alguns conceitos de <strong>JavaScript</strong>, como  <strong>manipulação de DOM</strong>, <strong>iteração</strong> de elementos HTML com <strong>forEach e Event Listeners</strong>.</p>
                    <div>
                        <p>HTML5</p>
                        <p>CSS3</p>
                        <p>JavaScript</p>
                    </div>
                    <div className='content-projects-rigth-text-button'>
                        <ButtonProject link="https://github.com/Ian-Alemida/Apeperia.git" span='ver código' icon1={codeWitheIcon} icon2={codeIcon}></ButtonProject>
                        <ButtonProject link="https://apeperia-azure.vercel.app/" span='ver projeto' icon1={viewWitheIcon} icon2={viewIcon}></ButtonProject>
                    </div>
                </div>
            </div>
            {/*Project5*/}
            <div className='content-projects-left'>
                <div className='content-projects-left-text'>
                    <h3>Optimus Tech</h3>
                    <p>Site produzido no workshop <strong>"7DaysOfCode"</strong> se trata de uma pagina de anuncio de vagas de uma  empresa chamada <strong>"Optimus Tech"</strong>. Pude Treinar conceitos de <strong>HTML & CSS</strong>, como <strong>FlexBox e display Grid</strong>.</p>
                    <div>
                        <p>HTML5</p>
                        <p>CSS3</p>
                    </div>
                    <div className='content-projects-left-text-button'>
                        <ButtonProject link="https://github.com/Ian-Alemida/OptimusTech.git" span='ver código' icon1={codeWitheIcon} icon2={codeIcon}></ButtonProject>
                        <hr />
                        <ButtonProject link="https://optimus-tech-indol.vercel.app/" span='ver projeto' icon1={viewWitheIcon} icon2={viewIcon}></ButtonProject>
                    </div>
                </div>
                <div className='content-projects-left-img'>
                    <img src={optimusTech} alt="imagem do projeto" />
                </div>
            </div>
            {/*Project6*/}
            <div className='content-projects-rigth'>
                <div className='content-projects-rigth-img'>
                    <img src={alurinha} alt="imagem do projeto" />
                </div>
                <div className='content-projects-rigth-text'>
                    <h3>Alurinha cursos</h3>
                    <p>Projeto feito em um dos cursos da Alura com a finalidade de fixar o  conhecimento de <strong>Flexbox, display Grid e Responsividade</strong> para mobile. O projeto consiste em uma das paginas da Alura onde há algumas opções de curso para o <strong>usuário</strong> escolher.</p>
                    <div>
                        <p>HTML5</p>
                        <p>CSS3</p>
                    </div>
                    <div className='content-projects-rigth-text-button'>
                        <ButtonProject link="https://github.com/Ian-Alemida/Alurinha.git" span='ver código' icon1={codeWitheIcon} icon2={codeIcon}></ButtonProject>
                        <ButtonProject link="https://alurinha-one.vercel.app/" span='ver projeto' icon1={viewWitheIcon} icon2={viewIcon}></ButtonProject>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects