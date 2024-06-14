import CardTechnology from './CardTechnology/CardTechnology';
import './technology.css';
import { roboto } from "../../fonts"
import { useEffect, useState } from 'react';
import axios from 'axios'

function Technology() {

    const [tecnologiasdb, setTecnologiasdb] = useState([]);

    useEffect(() => { // useEffect sendo usado para atualizar a nossa aplicação assim que os dados da API forem buscados
        async function buscarDados() {
            try {
                axios.get('/api/getTechnologies').then((response) => setTecnologiasdb(response.data));
            } catch (error) {
                console.error('Erro ao buscar dados:', error);
            }
        }
        buscarDados()
    }, []);
    return (
        <div className="content-technology" id='Technology'>
            <h2 className={roboto.className}>Tecnologias</h2>
            <div className='card-tech'>
                {tecnologiasdb.map((tecnologia, indice) =>
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