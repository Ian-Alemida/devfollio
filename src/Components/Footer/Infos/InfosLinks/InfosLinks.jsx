import './infosLinks.css'

function InfoLinks(props) {
    return ( 
        <a href={props.link} target="_blank" rel='noreferrer noopener'>
            <button className="Btn">
                <img className='svgIcon' src={props.icon} alt="icon button" />
                <span className="tooltip">{props.span}</span>
            </button>
        </a>  
    );
}

export default InfoLinks;