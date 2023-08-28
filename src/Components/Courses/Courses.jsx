import CardTecnologo from './Cards/CardTecnologo';
import CardCourses from './Cards/CardCourses';
import './courses.css'

function Courses () {
    return(
        <div className='content-courses'>
            <h2>Formação<span>.</span></h2>
            <div className='content-courses-row'>
                <CardTecnologo></CardTecnologo>
                <CardCourses curso='Formação HTML e CSS' plataform='Alura' time='65h - 2022' link='https://cursos.alura.com.br/degree/certificate/41d45351-1690-4a75-b7dc-6a3b2aff321c?lang=pt_BR'></CardCourses>
                <CardCourses curso='Arquitetura de CSS' plataform='Alura' time='8h - 2022' link='https://cursos.alura.com.br/certificate/a2d4daf2-7b26-4d48-9bfe-b6ab0e6d63c7?lang=pt_BR'></CardCourses>
            </div>
            <div className='content-courses-row'>
                <CardCourses curso='Arquitetura de CSS' plataform='Alura' time='8h - 2022' link='https://cursos.alura.com.br/certificate/a2d4daf2-7b26-4d48-9bfe-b6ab0e6d63c7?lang=pt_BR'></CardCourses>
                <CardCourses curso='Arquitetura de CSS' plataform='Alura' time='8h - 2022' link='https://cursos.alura.com.br/certificate/a2d4daf2-7b26-4d48-9bfe-b6ab0e6d63c7?lang=pt_BR'></CardCourses>
                <CardCourses curso='Arquitetura de CSS' plataform='Alura' time='8h - 2022' link='https://cursos.alura.com.br/certificate/a2d4daf2-7b26-4d48-9bfe-b6ab0e6d63c7?lang=pt_BR'></CardCourses>
                <CardCourses curso='Arquitetura de CSS' plataform='Alura' time='8h - 2022' link='https://cursos.alura.com.br/certificate/a2d4daf2-7b26-4d48-9bfe-b6ab0e6d63c7?lang=pt_BR'></CardCourses>
            </div>
        </div>
    )
}

export default Courses;