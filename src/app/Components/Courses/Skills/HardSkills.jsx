import './skills.css'

function HardSkills() {

    const skills = ['Next.js','React.JS','Prompt Engineer', 'Ethical Hacking', 'Java', 'Node.JS', 'Git & GitHub', 'Pentest', 'CSS3','HTML5', 'UX & UI', 'JavaScript','BootsTrap', 'SEO', 'Flutter', 'TailWind', 'RegExp', 'Dart']
    return (
        <div className='skills'>
            <h3>Hard Skills</h3>
            <div className="skills-list">
                {skills.map((skill, indice) => {
                    return <p key={indice}>{`-${skill}`}</p>
                })}
            </div>
        </div>
    )
}

export default HardSkills