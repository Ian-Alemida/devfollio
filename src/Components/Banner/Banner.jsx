import image from './images/banner_image.svg'
import './banner.css'
import Botao from './Botao/Botao'
import iconLinkedin from './images/linkedin.svg'
import iconGithub from './images/github.svg'


function Banner (){
    return (
        <div className='content' id='Banner'>
            <div className='content-text'>
                <div class="content-animation">
                    <div class="content-animation__container">    
                        <ul class="content-animation__container__list">
                            <li class="content-animation__container__list__item">Hello world !</li>
                            <li class="content-animation__container__list__item">Olá mundo !</li>
                        </ul>
                    </div>
                </div>
                <h2>Prazer, Eu sou Ian Almeida<span>.</span></h2>
                <p className='animation'>Sou um desenvolvedor Front-End...</p>
                <div className='content-button'>
                    <Botao icon={iconLinkedin} link="https://www.linkedin.com/in/ian-almeida-3a707a240/" text={'Linkedin'}></Botao>
                    <Botao  icon={iconGithub} link="https://github.com/Ian-Alemida" text={'GitHub'} class={"content-button-git"}></Botao>
                </div>
            </div>
            <div className='content-img'>
                <img src={image} className='img' alt="" />
            </div>
        </div>
    )
}

export default Banner