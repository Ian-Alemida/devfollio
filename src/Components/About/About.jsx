import './about.css'
import perfil from './perfil.jpg'
import Botao from '../Banner/Botao/Botao'
import iconDownload from './download-icon.svg'
import Card from '../Card/Card'

function About () {
    return (
        <div className="content-about">
            <div className='content-about-img'>
                <Card></Card>
            </div>
            <div className='content-about-text'>
                <h2>Sobre mim</h2>
                <h3>Belo Horizonte, Minas Gerais</h3>
                <p>Ola! Eu sou um Desenvolvedor Front-end especializado  em React.js <br /> Possuo habilidades solidas em HTML5 CSS3 e JavaScript.</p>
                <p>Atualmente estou  cursando Análise e Desenvolvimento de Sistemas, no primeiro semestre do curso. Entrei com o objetivo de aperfeiçoar minhas habilidades, pois estou em constante desenvolvimento.</p>
                <p>Desde de 2022, venho atuando no desenvolvimento de software e posso afirmar que estou apaixonado por essa  área. Sempre fui fascinado  por tecnologia e tive meus primeiros contatos coom a computação ainda muito cedo.</p>
                <div><Botao icon={iconDownload} text={'Baixar CV'}> </Botao>
            </div></div>
        </div>
    )
}

export default About