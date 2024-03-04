import './projects.css'
import Slider from './Slider/Slider'


function Projects() {

    const projetos = [{
        nameProject: 'Planet Sky',
        imgProject: './assets/images/PlanetSky.png',
        text: 'Uma aplicação autoral que te permite explorar o cosmos de forma envolvente e descobrir curiosidades fascinantes sobre o sistema solar! Usando Flutter e Dart pude fixar conceitos de Desenvolvimento Cross-Platform, sistema de navegação de rotas com Navigator e arvore de widgets.',
        isMobile: true,
        tecnologias: 'Dart - Flutter',
        linkCode: 'https://github.com/Ian-Alemida/planet_sky',
        linkView: 'https://planet-sky-5plu.vercel.app/#/initial'
    },
    {
        nameProject: 'Organo Valorant',
        imgProject: './assets/images/OrganoValoran.png',
        text: "Um projeto em react que cria organogramas de personagens e classes do jogo FPS online Valorant. Esse projeto foi desenvolvido visando adquirir experiencia e melhorar meu entendimento de, formulários, Objetos de dados e como eles interagem entre si, através do gerenciamento de estados, passando informações de um componente para o outro e construindo novos cards. Utilizei algumas bibliotecas externas como o 'hex-to-rgba', 'react icons' e 'uuid'.",
        isMobile: false,
        tecnologias: 'React',
        linkCode: 'https://github.com/Ian-Alemida/organoValorant',
        linkView: 'https://organo-valorant-rose.vercel.app/'
    },
    {
        nameProject: 'Alura Books',
        imgProject: './assets/images/AluraBooks.png',
        text: 'Um projeto responsivo com suporte a diferentes tamanhos de tela, se trata de uma pagina completa onde você pode escolher alguns livros de estudo. Utilizei o método mobile-first, que consiste em começar o desenvolvimento pelo layout mobile. Também tive acesso a alguns conceitos de JavaScript, quando o utilizei para criar um Carrossel na aplicação.',
        isMobile: false,
        tecnologias: 'JavaScript - HTML5 - CSS3',
        linkCode: 'https://github.com/Ian-Alemida/AluraBooks.git',
        linkView: 'https://alura-books-gold.vercel.app/'
    },
    {
        nameProject: 'Tela de Login',
        imgProject: './assets/images/telaLogin.png',
        text: 'Aplicação autoral desenvolvida Usando  Flutter e Dart, se trata de uma tela de login com validação. Pude utilizar conceitos de componentização de widgets para criar partes da tela e me aprofundar na lógica do Dart, criando um método que valida o login e senha utilizando, controller, keys e RegEx.',
        isMobile: true,
        tecnologias: 'Dart - Flutter',
        linkCode: 'https://github.com/Ian-Alemida/tela_login.git',
        linkView: 'https://tela-login-mg1z.vercel.app/'
    },
    {
        nameProject: 'Apeperia',
        imgProject: './assets/images/Apeperia.png',
        text: 'Um projeto responsivo com suporte a diferentes tamanhos de tela, se trata de uma pagina onde você pode encomendar aplicativos do jeito que precisar. Também tive a  oportunidade de aplicar alguns conceitos de JavaScript, como  manipulação de DOM, iteração de elementos HTML com forEach e Event Listeners.',
        isMobile: false,
        tecnologias: 'JavaScript - HTML5 - CSS3',
        linkCode: 'https://github.com/Ian-Alemida/Apeperia.git',
        linkView: 'https://apeperia-azure.vercel.app/'
    },
    {
        nameProject: 'Optimus Tech',
        imgProject: './assets/images/optimustech.png',
        text: 'Site produzido no workshop "7DaysOfCode" se trata de uma pagina de anuncio de vagas de uma  empresa chamada "Optimus Tech". Pude Treinar conceitos de HTML & CSS, como FlexBox e display Grid.',
        isMobile: false,
        tecnologias: 'HTML5 - CSS3',
        linkCode: 'https://github.com/Ian-Alemida/OptimusTech.git',
        linkView: 'https://optimus-tech-indol.vercel.app/'
    },]

    return (
        <div className="content-projects" id='Projects'>
            <h2>Projetos <br /><hr /></h2>
            <div className="slider">
                <Slider projetos={projetos} ></Slider>
            </div>
        </div>
    )
}

export default Projects