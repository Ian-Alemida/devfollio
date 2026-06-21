import Infos from './Infos/Infos';
import InfosNav from './InfosNav/InfosNav';
import './footer.css'
import { merriweather } from "../../fonts"

function Footer() {
    return (
        <section className='Content-footer' id='Footer'>
            <div className='Content-footer-top'>
                <Infos></Infos>
                <InfosNav></InfosNav>
            </div>
            <hr />
            <p className={`${merriweather.className} Content-footer-copy`}>© 2023 - Design and code by Ian Almeida. <br /> <span>V3.0.0</span></p>
        </section>
    )
}

export default Footer;