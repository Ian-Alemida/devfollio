import './infosNav.css'

function InfosNav() {
    return (
        <nav className='footer-Links-header'>
            <ul>
                <li><a href="#Banner" className='footer-Links-header-a'><span className='footer-Links-header-text'>Home</span></a></li>
                <li><a href="#About" className='footer-Links-header-a'><span className='footer-Links-header-text'>Sobre</span></a></li>
                <li><a href="#Technology" className='footer-Links-header-a'><span className='footer-Links-header-text'>Tecnologias</span></a></li>
                <li><a href="#Projects" className='footer-Links-header-a'><span className='footer-Links-header-text'>Projetos</span></a></li>
                <li><a href="#Courses" className='footer-Links-header-a'><span className='footer-Links-header-text'>Formação</span></a></li>
                <li><a href="#Footer" className='footer-Links-header-a'><span className='footer-Links-header-text'>Contato</span></a></li>
            </ul>
        </nav>
    );
}

export default InfosNav;