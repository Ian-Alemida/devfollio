import './infos.css'
import phoneSvg from './Images/phone.svg';
import mapSvg from './Images/map.svg';
import emailSvg from './Images/email.svg';
import instagram from './Images/instagram.svg'
import linkedin from './Images/linnkedin.svg'
import githubWithe from './Images/githubWithe.svg'
import IconText from './IconText/IconText';
import Form from './Form/Form';
import InfoLinks from './InfosLinks/InfosLinks';

function Infos () {
    return (
        <div className='Content-Infos'>
            <div className='Content-Infos-text'>
                <IconText icon={mapSvg} text={"Belo Horizonte - MG"}></IconText>
                <IconText icon={phoneSvg} text={"+55 (33) 9 9962 4996"}></IconText>
                <IconText icon={emailSvg} text={"ian.almeida357@gmail.com"}></IconText>
                <Form></Form>
            </div>
            <div className='content-infos-button'>
                <InfoLinks link='www.linkedin.com/in/ian-almeida-3a707a240' icon={linkedin} span='LinKedin'></InfoLinks>
                <InfoLinks link='https://www.instagram.com/binary_jouney/?igshid=OGQ5ZDc2ODk2ZA==' icon={instagram} span='Instagram'></InfoLinks>
                <InfoLinks link='https://github.com/Ian-Alemida' icon={githubWithe} span='This code'></InfoLinks>
            </div>
        </div>
    )
}

export default Infos;