import './iconText.css'
import Image from 'next/image'

function IconText (props) {
    return (
            <div className='Content-Infos-text-info'>
                <Image src={props.icon} alt="Phone Icon"/>
                <p className='Content-Infos-text-info-p'>{props.text}</p>
            </div>
    )
}

export default IconText;