import './botao.css'

function Botao (props){

    return (
        <button className={["animated-button", props.class]}>
            <span className='span-text'><img className='icon' src={props.icon} alt="" /> {props.text} </span>
            <span></span>
        </button>
    )
}

export default Botao