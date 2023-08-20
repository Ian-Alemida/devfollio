import CardTechnology from './CardTechnology/CardTechnology';
import './technology.css';

function Technology (){
    return(
        <div className="content-technology">
            <h2>Tecnologias</h2>
            <div className='content-technology-r'>
                <CardTechnology></CardTechnology>
                <CardTechnology></CardTechnology>
                <CardTechnology></CardTechnology>
                <CardTechnology></CardTechnology>
            </div>
        </div>
    )
}

export default Technology