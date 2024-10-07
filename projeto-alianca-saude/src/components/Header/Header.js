import React from 'react';
import './Header.css';
import imgHeader from '../../assets/logo.png';


const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <a href="/">
                    <img className="logo" src={imgHeader} alt="Logo Missão com Saúde"/>
                </a>
            </div>
            <nav>
                <ul className="nav-links">
                    <li><a href='/'>Check UP</a></li>
                    <li>
                        <a href='/'>Sobre</a>
                        <ul className="nav-links-dropdown">
                            <li><a href="/">Projeto</a></li>
                            <li><a href="/">Equipe</a></li>
                        </ul>
                    </li>
                    <li><a href='/'>Notícias</a></li>
                    <li><a className="sos-ajuda" href='/'>SOS Ajuda</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;