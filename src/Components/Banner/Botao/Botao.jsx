import './botao.css'

function Botao (props){

    return (
        <button class="animated-button">
            <span className='span-text'><img className='icon' src={props.icon} alt="" /> {props.text} </span>
            <span></span>
        </button>
    )
}

export default Botao