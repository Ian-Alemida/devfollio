import logo from './logo.svg'
import './header.css'
import Image from 'next/image'
import { roboto, ubuntu } from "../../fonts"
import { useState } from 'react';

function Header() {
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    const toggleMenu = () => {
        setMenuIsOpen(!menuIsOpen);
    };

    return (
        <header className={`${ubuntu.className} App-header`} id='Header'>
            <div className="App-header-desktop">
                <Image src={logo} className="App-logo" alt="logo" />
                <nav>
                    <ul className='Links-header'>
                        <li><a href="#Banner"><span className='Links-header-text'>Home</span></a></li>
                        <li><a href="#About"><span className='Links-header-text'>Sobre</span></a></li>
                        <li><a href="#Technology"><span className='Links-header-text'>Tecnologias</span></a></li>
                        <li><a href="#Projects"><span className='Links-header-text'>Projetos</span></a></li>
                        <li><a href="#Courses"><span className='Links-header-text'>Formação</span></a></li>
                        <li><a href="#Footer"><span className='Links-header-text'>Contato</span></a></li>
                    </ul>
                </nav>
            </div>
            <div className="App-header-mobile">
                <nav className="menu-hamburguer">
                    <div className="menu-icon" onClick={toggleMenu}>
                        &#9776; {/* Ícone de hambúrguer */}
                    </div>
                    <ul className={`nav-links ${menuIsOpen ? 'open' : ''}`}>
                        <li><a href="#Banner"><span className='Links-header-text'>Home</span></a></li>
                        <li><a href="#About"><span className='Links-header-text'>Sobre</span></a></li>
                        <li><a href="#Technology"><span className='Links-header-text'>Tecnologias</span></a></li>
                        <li><a href="#Projects"><span className='Links-header-text'>Projetos</span></a></li>
                        <li><a href="#Courses"><span className='Links-header-text'>Formação</span></a></li>
                        <li><a href="#Footer"><span className='Links-header-text'>Contato</span></a></li>
                    </ul>
                </nav>
                <Image src={logo} className="App-logo" alt="logo" />
            </div>
        </header>
    )
}

export default Header;