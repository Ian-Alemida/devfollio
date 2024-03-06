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
import nextIcon from './images/Next.js.svg'
import javaIcon from './images/java.svg'
import { roboto} from "@/app/fonts"

function Technology() {

    const Tecnologias = [
        {
        "img": htmlIcon,
        "nome": "HTML5",
        "text": "HTML é uma linguagem de marcação utilizada na construção de paginas web."
    },
    {
        "img": cssIcon,
        "nome": "CSS3",
        "text": "Utilizado  para estilizar elementos  escritos em linguagem de marcação."
    },
    {
        "img": jsIcon,
        "nome": "JavaScript",
        "text": "Utilizo JavaScript para criar aplicações com comportamento interativo e complexo."
    },
    {
        "img": reactIcon,
        "nome": "React.JS",
        "text": "Biblioteca usada para proporcionar interatividade ao usuário e componetizar a pagina."
    },
    {
        "img": nextIcon,
        "nome": "Next.JS",
        "text": "Utilizo next para proporcionar ao usuário uma experiencia mais rápida e melhorar o SEO."
    },
    {
        "img": tailwindIcon,
        "nome": "Tailwind",
        "text": "O tailwind é um FrameWork do CSS utilizado para estilizar os elementos através de classes."
    },
    {
        "img": flutterIcon,
        "nome": "Flutter",
        "text": "Utilizo  o Flutter juntamente com o Dart para a criação de telas para dispositivos mobile."
    },
    {
        "img": gitIcon,
        "nome": "Git e GitHub",
        "text": "Utilizo o git como programa de versionamento das minhas aplicações."
    },
    {
        "img": javaIcon,
        "nome": "Java",
        "text": "Utilizo Java no Back-end e para a criação de algumas API's."
    },
    {
        "img": nodeIcon,
        "nome": "Node.JS",
        "text": "Utilizo Node.JS para criação de API's no padrão REST."
    }
    ]
    return (
        <div className="content-technology" id='Technology'>
            <h2 className={roboto.className}>Tecnologias</h2>
            <div className='card-tech'>
                {Tecnologias.map((tecnologia, indice) =>
                    <CardTechnology
                        key={indice}
                        className='card-tech-1'
                        img={tecnologia.img}
                        h3={tecnologia.nome}
                        text={tecnologia.text}
                    />
                )}
            </div>
        </div>
    )
}

export default Technology