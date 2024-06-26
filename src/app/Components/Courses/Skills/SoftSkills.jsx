import './skills.css'

function SoftSkills() {

    const skills = ['Resolução de problemas', 'Comunicação eficaz', 'Flexibilidade', 'Rápida aprendizagem', 'Escuta ativa', 'Criatividade', 'Trabalho sob pressão', 'Curiosidade', 'Trabalho em equipe', 'Disciplina para seguir protocolos', 'Adaptação']
    return (
        <div className='skills'>
            <h3>Soft Skills</h3>
            <div className="skills-list">
                {skills.map((skill, indice) => {
                    return <p key={indice}>{`-${skill}`}</p>
                })}
            </div>
        </div>
    )
}

export default SoftSkills;