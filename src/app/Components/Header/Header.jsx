import logo from './logo.svg'
import './header.css'
import Image from 'next/image'

function Header() {
    return(
        <header className="App-header" id='Header'>
            <Image src={logo} className="App-logo" alt="logo" />
            <nav>
                <ul className='Links-header'>
                    <li><a href="#Banner"><span className='Links-header-text'>Home</span></a></li>
                    <li><a href="#About"><span className='Links-header-text'>Sobre</span></a></li>
                    <li><a href="#Technology"><span className='Links-header-text'>Habilidades</span></a></li>
                    <li><a href="#Projects"><span className='Links-header-text'>Projetos</span></a></li>
                    <li><a href="#Courses"><span className='Links-header-text'>Formação</span></a></li>
                    <li><a href="#Footer"><span className='Links-header-text'>Contato</span></a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;