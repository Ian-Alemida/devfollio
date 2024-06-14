'use client';
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
    const Skills = ['Front-end', 'Back-end', 'Mobile', 'Faculdade', 'Cyber Security', 'Livros']

    useEffect(() => { // useEffect sendo usado para atualizar a nossa aplicação assim que os dados da API forem buscados
        async function buscarDados() {
            try {
                axios.get('/api/getCourses').then((response) => setCursosdb(response.data));
            } catch (error) {
                console.error('Erro ao buscar dados:', error);
                // Implementar lógica para lidar com o erro (ex: exibir mensagem, redirecionar, etc.)
            }
        }
        buscarDados()
    }, []);
    const skillVisible = skillActive ?
        cursosdb.filter(curso => curso.skill === skillActive) : null;

    return (
        <section className='content-courses' id='Courses'>
            <h2 className={roboto.className}>Formação<span>.</span></h2>
            <div className='content-courses-menu'>
                {Skills.map(skill => {
                    return <button
                        key={skill}
                        className={skill === skillActive ? 'content-courses-menu-active' : ''}
                        value={skill}
                        onClick={() => { setSkillActive(skill) }}
                    >
                        {skill}
                    </button>
                })}
                <hr />
            </div>
            <article>
                <ul className='cards'>
                    {skillActive === 'Faculdade' ?
                        skillVisible.map((curso, indice) => {
                            return <CardTecnologo
                                key={indice}
                                link={curso.link}
                                nome={curso.nome}
                                plataform={curso.plataform}
                                time={curso.time}
                                type={curso.type}
                            />
                        }) : skillActive === 'Livros' ?
                            skillVisible.map((curso, indice) => {
                                return <CardBooks
                                    key={indice}
                                    nome={curso.nome}
                                    img={curso.img}
                                />
                            }) :
                            skillVisible.map((curso, indice) => {
                                return <CardCourses
                                    key={indice}
                                    link={curso.link}
                                    nome={curso.nome}
                                    plataform={curso.plataform}
                                    time={curso.time}
                                />
                            })}
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