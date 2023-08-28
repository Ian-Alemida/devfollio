import  './cardCourses.css'

function CardCourses (props){
    return(
            <div className='content-cardCourses'>
                <a href={props.link}>
                    <h3>Curso</h3>
                    <p className='content-cardCourses-p'>Análise e desenvolvimento de sistemas <small>- Alura</small></p>
                    <span>2023 - 2025</span>
                    </a>
            </div>
    )
}

export default CardCourses;