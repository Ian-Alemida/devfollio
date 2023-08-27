import './about.css'
import perfil from './images/perfil.jpg'
import perfil2 from './images/perfil2.png'
import Botao from '../Banner/Botao/Botao'
import iconDownload from './images/download-icon.svg'
import instagramIcon from './images/instagram-icon.svg'
import Card from './Card/Card'

function About () {
    return (
        <div className="content-about">
            <div className='content-about-img'>
                <Card children1={<img src={perfil} alt="Uma foto minha" />} children2={<img src={perfil2} alt="PixelArt de um homem em seu computador" />}></Card>
            </div>
            <div className='content-about-text'>
                <h2>Sobre mim</h2>
                <h3>Belo Horizonte, Minas Gerais</h3>
                <p>Ola! Eu sou um Desenvolvedor Front-end especializado  em React.js <br /> Possuo habilidades solidas em HTML5 CSS3 e JavaScript.</p>
                <p>Atualmente estou  cursando Análise e Desenvolvimento de Sistemas, no primeiro semestre do curso. Entrei com o objetivo de aperfeiçoar minhas habilidades, pois estou em constante desenvolvimento.</p>
                <p>Desde de 2022, venho atuando no desenvolvimento de software e posso afirmar que estou apaixonado por essa  área. Sempre fui fascinado  por tecnologia e tive meus primeiros contatos coom a computação ainda muito cedo.</p>
                <div className='content-button'>
                    <Botao icon={iconDownload} text={'Baixar CV'}></Botao>
                    <Botao icon={instagramIcon} text={'Instagram'}></Botao>
                </div>
            </div>
        </div>
    )
}

export default About