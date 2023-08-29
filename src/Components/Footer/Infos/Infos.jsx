import './infos.css'
import phoneSvg from './Images/phone.svg';
import IconText from './IconText/IconText';

function Infos () {
    return (
        <div className='Content-Infos'>
            <div className='Content-Infos-text'>
                <IconText icon={phoneSvg} text={"+55 (33) 9 9962 4996"}></IconText>
            </div>
        </div>
    )
}

export default Infos;