import './courses.css'
import CardTecnologo from './Cards/CardTecnologo';
import CardCourses from './Cards/CardCourses';
import HardSkills from './Skills/HardSkills';
import SoftSkills from './Skills/SoftSkills';
import Idiomas from './Skills/Idiomas';
import { useState } from 'react';

function Courses({ cursos }) {
    const [skillActive, setSkillActive] = useState('Front-end')

    const Skills = ['Front-end', 'Back-end', 'Mobile', 'Faculdade', 'Cyber Security', 'Livros']

    const skillVisible = skillActive ?
        cursos.filter(curso => curso.skill === skillActive) : null;

    return (
        <section className='content-courses' id='Courses'>
            <h2>Formação<span>.</span></h2>
            <div className='content-courses-menu'>
                {Skills.map(skill => {
                    return <button key={skill} className={skill === skillActive ? 'content-courses-menu-active' : ''} value={skill} onClick={() => { setSkillActive(skill) }}>
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