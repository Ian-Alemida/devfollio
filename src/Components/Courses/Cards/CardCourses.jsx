import  './cardCourses.css'

function CardCourses (props){
    return(
            <div className='content-cardCourses'>
                <a href={props.link}>
                    <h3>Curso</h3>
                    <p className='content-cardCourses-p'>{props.curso} <small>- {props.plataform}</small></p>
                    <span>{props.time}</span>
                    </a>
            </div>
    )
}

export default CardCourses;