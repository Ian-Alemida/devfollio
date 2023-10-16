import  './cardTecnologo.css'

function CardTecnologo ({ type, nome, instituição, time, link }){
    return(
        <a href={link} className='content-cardTecnologo' target="_blank" rel='noreferrer noopener'>
            <h3>{type}</h3>
            <p className='content-cardTecnologo-p'>{nome} <small>- {instituição}</small></p>
            <span>{time}</span>
        </a>
    )
}

export default CardTecnologo;