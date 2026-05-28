import CardTechnology from './CardTechnology/CardTechnology';
import './technology.css';
import { roboto } from "../../fonts"
import { useEffect, useState } from 'react';
import axios from 'axios'

function Technology() {

    const [tecnologiasdb, setTecnologiasdb] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        async function buscarDados() {
            try {
                const response = await axios.get('/api/getTechnologies');
                setTecnologiasdb(response.data);
            } catch (error) {
                console.error('Erro ao buscar dados:', error);
                setHasError(true);
            } finally {
                setIsLoading(false);
            }
        }
        buscarDados()
    }, []);

    const renderContent = () => {
        if (isLoading) {
            return Array.from({ length: 10 }).map((_, i) => (
                <div key={i} className="skeleton-tech-card" data-testid="skeleton-tech">
                    <div className="skeleton-tech-img" />
                    <div className="skeleton-tech-line" />
                    <div className="skeleton-tech-line short" />
                </div>
            ));
        }
        if (hasError) {
            return <p className="technology-error">Não foi possível carregar as tecnologias.</p>;
        }
        return tecnologiasdb.map((tecnologia) =>
            <CardTechnology
                key={tecnologia._id}
                className='card-tech-1'
                img={tecnologia.img}
                h3={tecnologia.nome}
                text={tecnologia.text}
            />
        );
    };

    return (
        <div className={`content-technology ${isLoading ? 'content-technology--loading' : ''}`} id='Technology'>
            <h2 className={roboto.className}>Tecnologias</h2>
            <div className='card-tech'>
                {renderContent()}
            </div>
        </div>
    )
}

export default Technology
