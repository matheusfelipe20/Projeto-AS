import React, {useState} from 'react';
import './footer.css';
import imgFooterLogo from '../../assets/logo/logo-secundary.png';
// import imgCollaboratorsDOMLogo from '../../assets/collaborators/dom-logo.png';
import imgCollaboratorsICNALogo from '../../assets/collaborators/icna-logo.png';
import iconEmail from "../../assets/icons/apps/gmail.svg";
import iconInstagram from "../../assets/icons/apps/instagram.svg";
import iconFacebook from "../../assets/icons/apps/facebook.svg";
import Divider from "../divider/Divider.jsx";
import LanguageSelector from '../languageSelector/LanguageSelector.jsx';



const Footer = () => {
    const [language, setLanguage] = useState('pt-BR');
    return (
        <div className="footer">
            <div className="footer-align-right">
                <div className="footer-introducion">
                    <div className="select-language">
                        <LanguageSelector language={language} setLanguage={setLanguage} />
                    </div>
                    <div className="footer-panel-icon">
                        <a href="/" target="_blank" rel="noopener noreferrer">
                            <img className="footer-icon" src={iconInstagram} alt="Ícone do Instagram" />
                        </a>
                        <a href="/" target="_blank" rel="noopener noreferrer">
                            <img className="footer-icon" src={iconFacebook} alt="Ícone do Facebook" />
                        </a>
                        <a href="/" target="_blank" rel="noopener noreferrer">
                            <img className="footer-icon" src={iconEmail} alt="Ícone do Gmail" />
                        </a>
                    </div>
                </div>
                <div className="footer-content">
                    <div className="footer-title">
                        <p>
                            Projeto
                        </p>
                    </div>
                    <div className="footer-options">
                        <a className="options-foot-1" href="/">
                            Sobre
                        </a>
                        <a className="options-foot-1" href="/">
                            Organização
                        </a>
                        <a className="options-foot-1" href="/">
                            Notícias
                        </a>
                    </div>
                </div>
                <div className="footer-content">
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
                            Dicas saudáveis
                        </a>
                    </div>
                </div>
                <div className="footer-content">
                    <div className="footer-title">
                        <p>
                            Política
                        </p>
                    </div>
                    <div className="footer-options">
                        <a className="options-foot-1" href="/">
                            Termos
                        </a>
                        <a className="options-foot-1" href="/">
                            Privacidade
                        </a>
                        <a className="options-foot-1" href="/">
                            Diretrizes
                        </a>
                    </div>
                </div>
                <div className="footer-content">
                    <div className="footer-title">
                        <p>
                            Apoio
                        </p>
                    </div>
                    <div className="footer-collaborators">
                        <img className="footer-collaborators-img" src={imgCollaboratorsICNALogo} alt="Logo de Colaborador"/>
                    </div>
                </div>
            </div>
            <Divider width={'95%'}  height={'1px'} color="var(--c-text-secundary)"/>
            <div className="footer-end-panel">
                <img className="footer-logo" src={imgFooterLogo} alt="Logo Missão com Saúde"/>
                <p className="footer-title-end">Missão com Saúde</p>
            </div>
            
            <div className="copyright-text">
                <p>&copy; Missão com Saúde - Uma ação em prol do Evangelho</p>
            </div>
        </div>
    );
};

export default Footer;