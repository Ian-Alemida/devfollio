import './iconText.css'

function IconText (props) {
    return (
            <div className='Content-Infos-text-info'>
                <img src={props.icon} alt="Phone Icon"/>
                <p>{props.text}</p>
            </div>
    )
}

export default IconText;