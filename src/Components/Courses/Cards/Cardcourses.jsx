import './cardcourses.css'

function CardCourses(props) {
        return (
                <a className='content-cardCourses' href={props.link} target="_blank" rel='noreferrer noopener'>
                        <h3>Curso</h3>
                        <p className='content-cardCourses-p'>{props.curso} <small>- {props.plataform}</small></p>
                        <span>{props.time}</span>
                </a>
        )
}

export default CardCourses;