import './infosLinks.css'
import Image from 'next/image'

function InfoLinks(props) {
    return ( 
        <a href={props.link} target="_blank" rel='noreferrer noopener'>
            <button className="Btn-infos">
                <Image className='svgIcon-infos' src={props.icon} alt="icon button" />
                <span className="tooltip-infos">{props.span}</span>
            </button>
        </a>  
    );
}

export default InfoLinks;