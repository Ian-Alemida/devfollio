import './botao.css'

function Botao (props){

    return (
        <a href={props.link} target="_blank" rel='noreferrer noopener'>
            <button className='animated-button'>
                <span className='span-text'><img className='icon' src={props.icon} alt="" /> {props.text} </span>
                <span></span>
            </button>
        </a>
    )
}

export default Botao