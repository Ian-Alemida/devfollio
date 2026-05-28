import './courses.css'
import CardTecnologo from './Cards/CardTecnologo';
import CardCourses from './Cards/CardCourses';
import HardSkills from './Skills/HardSkills';
import SoftSkills from './Skills/SoftSkills';
import Idiomas from './Skills/Idiomas';
import { useEffect, useState } from 'react';
import { roboto } from "../../fonts"
import CardBooks from './Cards/CardBooks';
import axios from 'axios'

function Courses() {
    const [skillActive, setSkillActive] = useState('Front-end')
    const [cursosdb, setCursosdb] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    const Skills = ['Front-end', 'Back-end', 'Mobile', 'Faculdade', 'Cyber Security', 'Livros']

    useEffect(() => {
        async function buscarDados() {
            try {
                const response = await axios.get('/api/getCourses');
                setCursosdb(response.data);
            } catch (error) {
                console.error('Erro ao buscar dados:', error);
                setHasError(true);
            } finally {
                setIsLoading(false);
            }
        }
        buscarDados()
    }, []);

    const skillVisible = skillActive ?
        cursosdb.filter(curso => curso.skill === skillActive) : null;

    const renderCards = () => {
        if (isLoading) {
            return Array.from({ length: 8 }).map((_, i) => (
                <li key={i} className="skeleton-courses-card" data-testid="skeleton-courses">
                    <div className="skeleton-courses-line label" />
                    <div className="skeleton-courses-line title" />
                    <div className="skeleton-courses-line meta" />
                </li>
            ));
        }
        if (hasError) {
            return <li className="courses-error">Não foi possível carregar os cursos.</li>;
        }
        if (skillActive === 'Faculdade') {
            return skillVisible.map((curso) => (
                <CardTecnologo
                    key={curso._id}
                    link={curso.link}
                    nome={curso.nome}
                    plataform={curso.plataform}
                    time={curso.time}
                    type={curso.type}
                />
            ));
        }
        if (skillActive === 'Livros') {
            return skillVisible.map((curso) => (
                <CardBooks
                    key={curso._id}
                    nome={curso.nome}
                    img={curso.img}
                />
            ));
        }
        return skillVisible.map((curso) => (
            <CardCourses
                key={curso._id}
                link={curso.link}
                nome={curso.nome}
                plataform={curso.plataform}
                time={curso.time}
            />
        ));
    };

    return (
        <section className='content-courses' id='Courses'>
            <h2 className={roboto.className}>Formação<span>.</span></h2>
            <div className='content-courses-menu'>
                {Skills.map(skill => (
                    <button
                        key={skill}
                        className={skill === skillActive ? 'content-courses-menu-active' : ''}
                        value={skill}
                        onClick={() => { setSkillActive(skill) }}
                    >
                        {skill}
                    </button>
                ))}
                <hr />
            </div>
            <article>
                <ul className='cards'>
                    {renderCards()}
                </ul>
            </article>
            <article className='content-courses-skills'>
                <HardSkills></HardSkills>
                <SoftSkills></SoftSkills>
                <Idiomas></Idiomas>
            </article>
        </section>
    )
}

export default Courses;