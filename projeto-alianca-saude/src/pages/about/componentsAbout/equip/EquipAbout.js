import React from "react";

import './EquipAbout.css';
import Divider from "../../../../components/Divider/Divider.js";
import imgMembersOne from "../../../../assets/members-picture/profile-test.png";
import imgMembersTwo from "../../../../assets/members-picture/profile-test1.png";

import iconLinkedin from "../../../../assets/icons/linkedin.svg";
import iconEmail from "../../../../assets/icons/email.svg";
import iconUser from "../../../../assets/icons/user.svg";

const equipAbout = () => {
    return(
        <div className="equipAbout-container">
            <h1 className="about-title">Sobre</h1>
            <h4 className="about-subtitle">A equipe</h4>
            <div className="about-painel">
                <div className="about-painel-text">
                    <p className="about-text-title">Nossa Missão</p>
                    <p className="about-text">
                    Promover a saúde física, emocional e espiritual, unindo conhecimento científico e 
                    princípios bíblicos para oferecer orientações e suporte a todos que buscam viver 
                    com mais qualidade.
                    </p>
                </div>
            </div>
            <Divider color="var(--c-text-primary)" width={"10%"}/>
            <div className="equip-painel">
                <p className="equip-text-title">Membros</p>
                <div className="equip-card">

                    <div className="card">
                        <p className="card-title">Função</p>
                        <div className="card-model">
                            <img className="card-img" src={imgMembersOne} alt="Imagem do membro participante do projeto"/>
                            <p className="card-name">Nome</p>
                            <div className="card-socials">
                                <a href="/" target="_blank" rel="noopener noreferrer">
                                    <img className="social-icon" src={iconUser} alt="Ícone Perfil" />
                                </a>
                                <a href="/" target="_blank" rel="noopener noreferrer">
                                    <img className="social-icon" src={iconEmail} alt="Ícone Email" />
                                </a>
                                <a href="/" target="_blank" rel="noopener noreferrer">
                                    <img className="social-icon" src={iconLinkedin} alt="Ícone LinkedIn" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <p className="card-title">Função</p>
                        <div className="card-model">
                            <img className="card-img" src={imgMembersTwo} alt="Imagem do membro participante do projeto"/>
                            <p className="card-name">Nome</p>
                            <div className="card-socials">
                                <a href="/" target="_blank" rel="noopener noreferrer">
                                    <img className="social-icon" src={iconUser} alt="Ícone Perfil" />
                                </a>
                                <a href="/" target="_blank" rel="noopener noreferrer">
                                    <img className="social-icon" src={iconEmail} alt="Ícone Email" />
                                </a>
                                <a href="/" target="_blank" rel="noopener noreferrer">
                                    <img className="social-icon" src={iconLinkedin} alt="Ícone LinkedIn" />
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            
        </div>
    );  
};

export default equipAbout;