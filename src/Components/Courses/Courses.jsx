import CardTecnologo from './Cards/CardTecnologo';
import CardCourses from './Cards/CardCourses';
import './courses.css'

function Courses () {
    return(
        <div className='content-courses'>
            <h2>Formação<span>.</span></h2>
            <div className='content-courses-row'>
                <CardTecnologo></CardTecnologo>
                <CardCourses></CardCourses>
                <CardCourses></CardCourses>
            </div> 
        </div>
    )
}

export default Courses;