import './infos.css'
import phoneSvg from './Images/phone.svg';
import mapSvg from './Images/map.svg';
import emailSvg from './Images/email.svg';
import githubSvg from './Images/githubWithe.svg'
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
                <InfoLinks link='https://github.com/Ian-Alemida' icon={githubSvg} span='LinKedin'></InfoLinks>
            </div>
        </div>
    )
}

export default Infos;