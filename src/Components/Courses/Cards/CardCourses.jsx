import  './cardCourses.css'

function CardCourses (props){
    return(
        <a href={props.link}>
            <div className='content-cardCourses'>
                <h3>Curso</h3>
                <p className='content-cardCourses-p'>Análise e desenvolvimento de sistemas <small>- Alura</small></p>
                <span>2023 - 2025</span>
            </div>
        </a>
    )
}

export default CardCourses;