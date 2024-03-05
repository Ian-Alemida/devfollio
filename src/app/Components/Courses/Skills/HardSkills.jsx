import './skills.css'

function HardSkills() {

    const skills = ['React.JS', 'HTML5', 'Git & GitHub', 'Node.JS', 'CSS3', 'UX & UI', 'JavaScript', 'BootsTrap', 'SEO', 'Flutter', 'TailWind', 'RegExp', 'Dart', 'Java']
    return (
        <div className='skills'>
            <h3>Hard Skills</h3>
            <div className="skills-list">
                {skills.map((skill, indice) => {
                    return <p key={indice}>{skill}</p>
                })}
            </div>
        </div>
    )
}

export default HardSkills