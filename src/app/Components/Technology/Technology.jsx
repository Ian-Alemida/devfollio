import CardTechnology from './CardTechnology/CardTechnology';
import './technology.css';
import { roboto } from "@/app/fonts"

function Technology({ Tecnologias }) {

    return (
        <div className="content-technology" id='Technology'>
            <h2 className={roboto.className}>Tecnologias</h2>
            <div className='card-tech'>
                {Tecnologias.map((tecnologia, indice) =>
                    <CardTechnology
                        key={indice}
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