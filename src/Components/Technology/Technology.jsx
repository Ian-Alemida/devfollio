import CardTechnology from './CardTechnology/CardTechnology';
import './technology.css';

function Technology ({tecnologias}){
    return(
        <div className="content-technology" id='Technology'>
            <h2>Tecnologias</h2>
            <div className='card-tech'>
            {tecnologias.map(tecnologia => 
                <CardTechnology 
                    className='card-tech-1'
                    img={tecnologia.img} 
                    h3={tecnologia.nome} 
                    text={tecnologia.text}
                />
            )}
            </div>
        </div>
    )
}

export default Technology