import React from 'react';
import './Header.css';
import imgHeader from '../../assets/logo/logo.png';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <Link to="/">
                    <img className="logo" src={imgHeader} alt="Logo Missão com Saúde" />
                </Link>
            </div>
            <nav>
                <ul className="nav-links">
                    <li><Link className="nav-options" to='/'>Consultas</Link></li>
                    <li><Link className="nav-options" to='/'>Testes</Link></li>
                    <li><Link className="nav-options" to='/about'>Sobre</Link></li>
                    <li><Link className="sos-ajuda" to='/'>Check UP</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;