import './courses.css'
import CardTecnologo from './Cards/CardTecnologo';
import CardCourses from './Cards/CardCourses';
import HardSkills from './Skills/HardSkills';
import SoftSkills from './Skills/SoftSkills';
import Idiomas from './Skills/Idiomas';

function Courses({ cursos }) {
    console.log(cursos)
    return (
        <section className='content-courses' id='Courses'>
            <h2>Formação<span>.</span></h2>
            <article>
                <ul className='cards'>
                    <CardTecnologo/>
                    {cursos.map(curso => {
                        return <CardCourses
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