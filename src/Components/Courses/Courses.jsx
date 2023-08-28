import CardTecnologo from './Cards/CardTecnologo';
import CardCourses from './Cards/CardCourses';
import './courses.css'

function Courses () {
    return(
        <div className='content-courses'>
            <h2>Formação<span>.</span></h2>
            <div className='content-courses-row'>
                <CardTecnologo></CardTecnologo>
                <CardCourses curso='Formação HTML e CSS' plataform='Alura' time='65h - 2022'></CardCourses>
                <CardCourses></CardCourses>
            </div> 
        </div>
    )
}

export default Courses;