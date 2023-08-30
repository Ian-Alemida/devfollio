import logo from './logo.svg'
import './header.css'

function Header() {
    return(
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <nav>
                <ul className='Links-header'>
                    <li><a href=""><span className='Links-header-text'>Home</span></a></li>
                    <li><a href=""><span className='Links-header-text'>Sobre</span></a></li>
                    <li><a href=""><span className='Links-header-text'>Habilidades</span></a></li>
                    <li><a href=""><span className='Links-header-text'>Projetos</span></a></li>
                    <li><a href=""><span className='Links-header-text'>Formação</span></a></li>
                    <li><a href=""><span className='Links-header-text'>Contato</span></a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;