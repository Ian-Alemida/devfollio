import Infos from './Infos/Infos';
import './footer.css'

function Footer () {
    return (
        <div className='Content-footer'>
            <Infos></Infos>
            <hr />
            <p className='Content-footer-copy'>© 2023 - Design and code by Ian Almeida.</p>
        </div>
    )
}

export default Footer;