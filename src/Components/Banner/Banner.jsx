import image from './banner_image.svg'
import './banner.css'


function Banner (){
    return (
        <div className='content'>
            <div className='content-text'>
                <span>Hello word! / Olá mundo!</span>
                <h2>Prazer, Eu sou Ian Almeida</h2>
                <p>Sou um desenvolvedor Front-End</p>
            </div>
            <div className='content-img'><img src={image} className='img' alt="" /></div>
        </div>
    )
}

export default Banner