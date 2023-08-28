import CardTecnologo from './Cards/CardTecnologo';
import './courses.css'

function Courses () {
    return(
        <div className='content-courses'>
            <h2>Formação<span>.</span></h2>
            <div className='content-courses-row'>
                <CardTecnologo></CardTecnologo>
            </div> 
        </div>
    )
}

export default Courses;