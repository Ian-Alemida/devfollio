import './botao.css'

function Botao (props){

    return (
        <a href={props.link} className='animated-button' target="_blank" rel='noreferrer noopener'>
                <span className='span-text'><img className='icon' src={props.icon} alt="" /> {props.text} </span>
                <span></span>
        </a>
    )
}

export default Botao