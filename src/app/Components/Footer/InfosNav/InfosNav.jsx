import './infosNav.css'

function InfosNav () {
    return ( 
        <nav className='footer-Links-header'>
            <ul>
                <li><a href="#Banner"><span className='footer-Links-header-text'>Home</span></a></li>
                <li><a href="#About"><span className='footer-Links-header-text'>Sobre</span></a></li>
                <li><a href="#Technology"><span className='footer-Links-header-text'>Habilidades</span></a></li>
                <li><a href="#Projects"><span className='footer-Links-header-text'>Projetos</span></a></li>
                <li><a href="#Courses"><span className='footer-Links-header-text'>Formação</span></a></li>
                <li><a href="#Footer"><span className='footer-Links-header-text'>Contato</span></a></li>
            </ul>
        </nav>
    );
}

export default InfosNav;