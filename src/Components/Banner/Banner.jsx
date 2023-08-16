import image from './banner_image.svg'
import './banner.css'


function Banner (){
    return (
        <div className='content'>
            <div className='content-text'>
                <div class="content-animation">
                    <div class="content-animation__container">    
                        <ul class="content-animation__container__list">
                            <li class="content-animation__container__list__item">Hello world !</li>
                            <li class="content-animation__container__list__item">Olá mundo !</li>
                        </ul>
                    </div>
                </div>
                <h2>Prazer, Eu sou Ian Almeida.</h2>
                <p className='animation'>Sou um desenvolvedor Front-End...</p>
            </div>
            <div className='content-img'>
                <img src={image} className='img' alt="" />
            </div>
        </div>
    )
}

export default Banner