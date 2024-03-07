import Infos from './Infos/Infos';
import InfosNav from './InfosNav/InfosNav';
import './footer.css'
import { merriweather} from "@/app/fonts"

function Footer () {
    return (
        <section className='Content-footer'  id='Footer'>
            <div className='Content-footer-top'>
                <Infos></Infos>
                <InfosNav></InfosNav>
            </div>
            <hr />
            <p className={`${merriweather.className } Content-footer-copy`}>© 2023 - Design and code by Ian Almeida.</p>
        </section>
    )
}

export default Footer;