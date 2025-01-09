import React from "react";

import './EquipAbout.css';
import Divider from "../../../../components/divider/Divider.jsx";
import imgMembersOne from "../../../../assets/members-picture/profile-test.png";
import imgMembersTwo from "../../../../assets/members-picture/profile-test1.png";

import iconLinkedin from "../../../../assets/icons/linkedin.svg";
import iconEmail from "../../../../assets/icons/email.svg";
import iconUser from "../../../../assets/icons/user.svg";

const equipAbout = () => {

    const scroll = (direction) => {
        const container = document.querySelector(".equipAbout-panel-card");
        const scrollAmount = container.offsetWidth / 1;
        container.scrollLeft += direction * scrollAmount;
    };
      

    return(
        <div className="equipAbout-container">
            <h1 className="equipAbout-title">Sobre</h1>
            <h4 className="equipAbout-subtitle">A equipe</h4>
            <div className="equipAbout-panel">
                <div className="equipAbout-panel-text">
                    <p className="equipAbout-text-title">Nossa Missão</p>
                    <p className="equipAbout-text">
                        Nosso compromisso é cuidar de quem cuida. Este projeto foi criado especialmente para apoiar pastores, missionários e líderes em sua jornada, promovendo a saúde integral – física, emocional e espiritual. Entendemos que a dedicação ao ministério muitas vezes pode levar ao desgaste, e por isso queremos ser uma fonte de suporte e cuidado.
                        Aqui, você encontrará dicas práticas para uma vida mais saudável, apoio para enfrentar os desafios do dia a dia e orientação sobre os exames necessários para monitorar sua saúde. Mais do que isso, somos uma ponte entre você e uma rede de profissionais de saúde cristãos comprometidos em ajudar nessa missão.
                    </p>
                    <p className="equipAbout-text">
                        
                    </p>
                    <p className="equipAbout-text">
                        Nosso trabalho é facilitar o acesso a consultas, exames e recursos indispensáveis para cuidar de si mesmo, permitindo que recupere forças e retorne ao campo ministerial com vigor renovado. Acreditamos que sua saúde é essencial para continuar servindo a Deus com excelência e impactando vidas. Porque cuidar de você é também cuidar da missão que lhe foi confiada.
                    </p>
                </div>
            </div>
            <Divider color="var(--c-text-primary)" height={"1px"} width={"10%"}/>
            <div className="equipAbout-panel">
                <p className="equipAbout-text-title">Membros</p>
                <div className="equipAbout-panel-card-container">
                    <button className="equipAbout-carousel-button prev" onClick={() => scroll(-1)}>◀</button>
                    <div className="equipAbout-panel-card">
                        {/* Cards de Membros de Equipe */}
                        <div className="equipAbout-card">
                            <p className="equipAbout-card-title">Função</p>
                            <div className="equipAbout-card-model">
                                <img className="equipAbout-card-img" src={imgMembersOne} alt="Imagem do membro participante do projeto"/>
                                <p className="equipAbout-card-name">Nome</p>
                                <div className="equipAbout-card-socials">
                                    <a href="/" target="_blank" rel="noopener noreferrer">
                                        <img className="equipAbout-social-icon" src={iconUser} alt="Ícone Perfil" />
                                    </a>
                                    <a href="/" target="_blank" rel="noopener noreferrer">
                                        <img className="equipAbout-social-icon" src={iconEmail} alt="Ícone Email" />
                                    </a>
                                    <a href="/" target="_blank" rel="noopener noreferrer">
                                        <img className="equipAbout-social-icon" src={iconLinkedin} alt="Ícone LinkedIn" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="equipAbout-card">
                            <p className="equipAbout-card-title">Função</p>
                            <div className="equipAbout-card-model">
                                <img className="equipAbout-card-img" src={imgMembersTwo} alt="Imagem do membro participante do projeto"/>
                                <p className="equipAbout-card-name">Nome</p>
                                <div className="equipAbout-card-socials">
                                    <a href="/" target="_blank" rel="noopener noreferrer">
                                        <img className="equipAbout-social-icon" src={iconUser} alt="Ícone Perfil" />
                                    </a>
                                    <a href="/" target="_blank" rel="noopener noreferrer">
                                        <img className="equipAbout-social-icon" src={iconEmail} alt="Ícone Email" />
                                    </a>
                                    <a href="/" target="_blank" rel="noopener noreferrer">
                                        <img className="equipAbout-social-icon" src={iconLinkedin} alt="Ícone LinkedIn" />
                                    </a>
                                </div>
                            </div>

                        </div>

                        <div className="equipAbout-card">
                            <p className="equipAbout-card-title">Função</p>
                            <div className="equipAbout-card-model">
                                <img className="equipAbout-card-img" src={imgMembersOne} alt="Imagem do membro participante do projeto"/>
                                <p className="equipAbout-card-name">Nome</p>
                                <div className="equipAbout-card-socials">
                                    <a href="/" target="_blank" rel="noopener noreferrer">
                                        <img className="equipAbout-social-icon" src={iconUser} alt="Ícone Perfil" />
                                    </a>
                                    <a href="/" target="_blank" rel="noopener noreferrer">
                                        <img className="equipAbout-social-icon" src={iconEmail} alt="Ícone Email" />
                                    </a>
                                    <a href="/" target="_blank" rel="noopener noreferrer">
                                        <img className="equipAbout-social-icon" src={iconLinkedin} alt="Ícone LinkedIn" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="equipAbout-card">
                            <p className="equipAbout-card-title">Função</p>
                            <div className="equipAbout-card-model">
                                <img className="equipAbout-card-img" src={imgMembersOne} alt="Imagem do membro participante do projeto"/>
                                <p className="equipAbout-card-name">Nome</p>
                                <div className="equipAbout-card-socials">
                                    <a href="/" target="_blank" rel="noopener noreferrer">
                                        <img className="equipAbout-social-icon" src={iconUser} alt="Ícone Perfil" />
                                    </a>
                                    <a href="/" target="_blank" rel="noopener noreferrer">
                                        <img className="equipAbout-social-icon" src={iconEmail} alt="Ícone Email" />
                                    </a>
                                    <a href="/" target="_blank" rel="noopener noreferrer">
                                        <img className="equipAbout-social-icon" src={iconLinkedin} alt="Ícone LinkedIn" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="equipAbout-carousel-button next" onClick={() => scroll(1)}>▶</button>
                </div>
            </div>
        </div>
    );  
};

export default equipAbout;