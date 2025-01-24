import React, { useState } from 'react';
import './headerDesktop.css';
import imgHeader from '../../assets/logo/logo.png';
import { Link } from 'react-router-dom';
import Divider from '../divider/Divider';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header>
            <div className="nav-home">
                <div className="logo">
                    <Link to="/">
                        <img className="logo" src={imgHeader} alt="Logo Missão com Saúde" />
                    </Link>
                </div>
                <div className="nav-panel">
                    <div className="nav-login">
                        <Link className="nav-button-register" to="/">
                            Registrar
                        </Link>
                        <Link className="nav-button-login" to="/">
                            Entrar
                        </Link>
                    </div>
                    <div className="nav-divider">
                        <Divider height={'2px'} width="100%" color="var(--c-text-secundary)" margin={'0'} />
                    </div>
                    <button className="menu-toggle-button" onClick={toggleMenu}>
                        {isMenuOpen ? '✖ Fechar' : '☰ Menu'}
                    </button>
                    <div className={`nav-links-options ${isMenuOpen ? 'open' : 'closed'}`}>
                        <nav>
                            <ul className="nav-sos">
                                <li>
                                    <Link className="sos-ajuda" to="/">
                                        Check UP
                                    </Link>
                                </li>
                            </ul>
                            <ul className="nav-links">
                                <li>
                                    <Link className="nav-options" to="/">
                                        Viva Bem
                                    </Link>
                                </li>
                                <li>
                                    <Link className="nav-options" to="/">
                                        Notícias
                                    </Link>
                                </li>
                                <li>
                                    <Link className="nav-options" to="/about">
                                        Sobre
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
