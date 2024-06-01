import CardTechnology from './CardTechnology/CardTechnology';
import './technology.css';
import { roboto } from "@/app/fonts"



function Technology() {


    const Tecnologias = [
        {
            "img": '/assets/images/technology/html5.svg',
            "nome": "HTML5",
            "text": "HTML é uma linguagem de marcação utilizada na construção de paginas web."
        },
        {
            "img": '/assets/images/technology/css3.svg',
            "nome": "CSS3",
            "text": "Utilizado  para estilizar elementos  escritos em linguagem de marcação."
        },
        {
            "img": '/assets/images/technology/js.svg',
            "nome": "JavaScript",
            "text": "Utilizo JavaScript para criar aplicações com comportamento interativo e complexo."
        },
        {
            "img": '/assets/images/technology/react.svg',
            "nome": "React.JS",
            "text": "Biblioteca usada para proporcionar interatividade ao usuário e componetizar a pagina."
        },
        {
            "img": '/assets/images/technology/Next.js.svg',
            "nome": "Next.JS",
            "text": "Utilizo next para proporcionar ao usuário uma experiencia mais rápida e melhorar o SEO."
        },
        {
            "img": '/assets/images/technology/tailwind.png',
            "nome": "Tailwind",
            "text": "Tailwind é um FrameWork CSS utilizado para estilizar os elementos através de classes."
        },
        {
            "img": '/assets/images/technology/flutter.png',
            "nome": "Flutter",
            "text": "Utilizo Flutter juntamente com Dart para criação de telas em dispositivos mobile."
        },
        {
            "img": '/assets/images/technology/git.svg',
            "nome": "Git e GitHub",
            "text": "Utilizo o git como programa de versionamento das minhas aplicações."
        },
        {
            "img": '/assets/images/technology/java.svg',
            "nome": "Java",
            "text": "Utilizo Java no Back-end e para a criação de algumas API's."
        },
        {
            "img": '/assets/images/technology/node.svg',
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