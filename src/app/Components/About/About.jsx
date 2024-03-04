import './about.css'
import perfil from './images/perfil.jpg'
import perfil2 from './images/perfil2.png'
import Botao from '../Banner/Botao/Botao'
import iconDownload from './images/download-icon.svg'
import instagramIcon from './images/instagram-icon.svg'
import Card from './Card/Card'
import Image from 'next/image'
import Curriculo from './Curriculo.pdf'

function About () {
    return (
        <div className="content-about" id='About'>
            <div className='content-about-img'>
                <Card children1={<Image src={perfil} alt="Uma foto minha" />} children2={<Image src={perfil2} alt="PixelArt de um homem em seu computador" />}></Card>
            </div>
            <div className='content-about-text'>
                <h2>Sobre mim</h2>
                <h3>Belo Horizonte, Minas Gerais</h3>
                <p>Ola! Sou um Desenvolvedor Front-end especializado em Next.js, apaixonado por tecnologia e com uma sólida experiência em HTML5, CSS3 e JavaScript. Também estou imerso nos estudos de cibersegurança e sou um entusiasta da inteligência artificial.</p>
                <p>Desde 2022, tenho me dedicado ao desenvolvimento de software, e essa jornada tem sido verdadeiramente apaixonante. Cresci fascinado pela tecnologia e, desde cedo, tive interesse na computação. Em 2023, decidi dar um passo adiante e me matriculei no curso de Análise e Desenvolvimento de Sistemas, buscando aprimorar minhas habilidades e me manter em constante desenvolvimento. </p>
                <p>Estou comprometido em aprimorar minhas habilidades e contribuir com meu conhecimento para ajudar a comunidade alcançar seus objetivos.</p>
                <div className='content-button'>
                    <Botao icon1={iconDownload} icon2={iconDownload} link={Curriculo} isDownload text={'Baixar CV'}></Botao>
                    <Botao icon1={instagramIcon} icon2={instagramIcon} link="https://www.instagram.com/binary_jouney/?igshid=OGQ5ZDc2ODk2ZA=='" text={'Instagram'}></Botao>
                </div>
            </div>
        </div>
    )
}

export default About