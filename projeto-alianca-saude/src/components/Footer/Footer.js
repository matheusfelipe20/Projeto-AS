import React from 'react';
import './Footer.css';
import imgFooterLogo from '../../assets/logo-secundary.png';


const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-1">
                <img className="footer-logo" src={imgFooterLogo} alt="Logo Missão com Saúde"/>
                <p className="footer-logo-text">Missão com Saúde</p>
            </div>
            <div className="footer-align-right">
                <div className="footer-content">
                    <div className="footer-title">
                        <p>
                            Projeto
                        </p>
                    </div>
                    <div className="footer-options">
                        <a className="options-foot-1" href="/">
                            Sobre o Sistema
                        </a>
                        <a className="options-foot-1" href="/">
                            Organização
                        </a>
                        <a className="options-foot-1" href="/">
                            Termo de uso
                        </a>
                        <a className="options-foot-1" href="/">
                            Política de Privacidade
                        </a>
                    </div>
                </div>
                <div className="footer-content-1">
                    <div className="footer-title">
                        <p>
                            Cuide da Saúde
                        </p>
                    </div>
                    <div className="footer-options">
                        <a className="options-foot-1" href="/">
                            Check up online
                        </a>
                        <a className="options-foot-1" href="/">
                            Avaliar qualidade de vida
                        </a>
                        <a className="options-foot-1" href="/">
                            Dicas para viver saúdavel
                        </a>
                    </div>
                </div>
            </div>
            <div className="copyright-text">
                <p>Missão com Saúde - Uma ação em prol do Evangelho</p>
            </div>
        </div>
    );
};

export default Footer;