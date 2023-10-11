import './cardCourses.css'

function CardCourses({ link, nome, plataform, time }) {
        return (
                <a className='content-cardCourses' href={link} target="_blank" rel='noreferrer noopener'>
                        <h3>Curso</h3>
                        <p className='content-cardCourses-p'>{nome} <small>- {plataform}</small></p>
                        <span>{time}</span>
                </a>
        )
}

export default CardCourses;