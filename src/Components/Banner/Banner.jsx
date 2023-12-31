import './banner.css'
import Botao from './Botao/Botao'
import iconLinkedin from './images/linkedin.svg'
import iconLinkedinBlack from './images/linkedinBlack.svg'
import iconGithub from './images/github.svg'
import iconGithubBlack from './images/githubBlack.svg'
import ImgBanner from './ImgBanner/ImgBanner'


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
                    <Botao icon1={iconLinkedin} icon2={iconLinkedinBlack} link="https://www.linkedin.com/in/ian-almeida-3a707a240/" text={'Linkedin'}></Botao>
                    <Botao  icon1={iconGithub} icon2={iconGithubBlack} link="https://github.com/Ian-Alemida" text={'GitHub'} class={"content-button-git"}></Botao>
                </div>
            </div>
            <ImgBanner></ImgBanner>
        </div>
    )
}

export default Banner