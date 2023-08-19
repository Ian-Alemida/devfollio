import logo from './logo.svg'
import './header.css'

function Header() {
    return(
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <ul className='Links-header'>
                <li><a href=""><span>Home</span></a></li>
                <li><a href=""><span>Sobre</span></a></li>
                <li><a href=""><span>Habilidades</span></a></li>
                <li><a href=""><span>Portfolio</span></a></li>
                <li><a href=""><span>Contatos</span></a></li>
            </ul>
        </header>
    )
}

export default Header;