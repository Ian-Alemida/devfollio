import './courses.css'
import CardTecnologo from './Cards/CardTecnologo';
import CardCourses from './Cards/CardCourses';
import HardSkills from './Skills/HardSkills';
import SoftSkills from './Skills/SoftSkills';
import Idiomas from './Skills/Idiomas';

function Courses({ cursos }) {
    return (
        <section className='content-courses' id='Courses'>
            <h2>Formação<span>.</span></h2>
            <article>
                <ul className='cards'>
                    <CardTecnologo 
                        type={'Tecnólogo'} 
                        nome={'Análise e desenvolvimento de sistemas'}
                        instituição={'Descomplica faculdade digital'}
                        time={'2023 - 2025'}
                        link={'###'}
                    />
                    <CardTecnologo 
                        type={'Certificado'}
                        nome={'Desenvolvedor front-end'}
                        instituição={'Descomplica faculdade digital'}
                        time={'240h - 2023'}
                        link={'https://certificados.descomplica.com.br/graduacao/1d59a0dcadafb2fe77329ced4eff1b5de58b72bbc4b4bcde8cf3ed3ff4bcc40e'}
                    />
                    <CardTecnologo 
                        type={'Certificado'}
                        nome={'Programmer'}
                        instituição={'Descomplica faculdade digital'}
                        time={'160h - 2023'}
                        link={'https://certificados.descomplica.com.br/graduacao/13a65a3e574b4da5b7163364671b81e3c215ee0ab04a800319684dd3e844992b'}
                    />
                    {cursos.map((curso, indice) => {
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