import './imgBanner.css'
import image from '../images/banner_image.svg'

function ImgBanner () {
    return ( 
        <div className='content-img'>
            <img src={image} className='img' alt="" />
        </div>
    );
}

export default ImgBanner;