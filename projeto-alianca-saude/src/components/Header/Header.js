import React from 'react';
import './Header.css';
import imgHeader from '../../assets/logo/logo.png';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <Link to="/home">
                    <img className="logo" src={imgHeader} alt="Logo Missão com Saúde" />
                </Link>
            </div>
            <nav>
                <ul className="nav-links">
                    <li><Link className="nav-options" to='/'>Check UP</Link></li>
                    <li>
                        <Link className="nav-options" to='/about'>Sobre</Link>
                    </li>
                    <li><Link className="nav-options" to='/'>Notícias</Link></li>
                    <li><Link className="sos-ajuda" to='/'>SOS Ajuda</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;