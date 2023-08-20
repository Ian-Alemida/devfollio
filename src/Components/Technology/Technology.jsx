import CardTechnology from './CardTechnology/CardTechnology';
import './technology.css';
import gitIcon from './images/git.svg'
import htmlIcon from './images/html5.svg'
import cssIcon from './images/css3.svg'
import jsIcon from './images/js.svg'
import reactIcon from './images/react.svg'
import nodeIcon from './images/node.svg'
import tailwindIcon from './images/tailwind.png'
import flutterIcon from './images/flutter.png'

function Technology (){
    return(
        <div className="content-technology">
            <h2>Tecnologias</h2>
            <div className='content-technology-r'>
                <CardTechnology img={htmlIcon} h3={'HTML5'} text={'HTML é uma linguagem de marcação utilizada na construção de paginas web.'}></CardTechnology>
                <CardTechnology img={cssIcon} h3={'CSS3'} text={'Utilizado  para estilizar elementos  escritos em linguagem de marcação.'}></CardTechnology>
                <CardTechnology img={jsIcon} h3={'JavaScript'} text={'Utilizo JavaScript para criar aplicações com comportamento interativo e complexo.'}></CardTechnology>
                <CardTechnology img={reactIcon} h3={'ReactJS'} text={'FrameWork usado para proporcionar interatividade ao usuario e componetizar a pagina.'}></CardTechnology>
            </div>
            <div className='content-technology-r'>
                <CardTechnology img={tailwindIcon} h3={'Tailwind'} text={'O tailwind é um FrameWork do CSS utilizado para estilizar os elementos atraves de classes.'}></CardTechnology>
                <CardTechnology img={flutterIcon} h3={'Flutter'} text={'Utilizo  o Flutter juntamente com o Dart para a criação de telas para dispositivos mobile.'}></CardTechnology>
                <CardTechnology img={gitIcon} h3={'Git e GitHub'} text={'Utilizo  o git como programa de versionamento das minhas aplicações.'}></CardTechnology>
                <CardTechnology img={nodeIcon} h3={'NodeJS'} text={`Utilizo Node.JS para criação de API's no padrão REST.`}></CardTechnology>
            </div>
        </div>
    )
}

export default Technology