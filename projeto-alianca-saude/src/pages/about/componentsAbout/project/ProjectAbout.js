import React from "react";

import imgLogoAbout from '../../../../assets/logo/logo-about.png';
import './ProjectAbout.css';

const projectAbout = () => {
    return(
        <div className="projectAbout-container">
            <h1 className="about-title">Sobre</h1>
            <h4 className="about-subtitle">O projeto</h4>
            <div className="about-painel">
                <div className="about-painel-text">
                    <p className="about-text-title">Bem-vindo ao "Missão com Saúde"!</p>
                    <p className="about-text">
                        Sabemos que a vida ministerial exige muita dedicação, tempo e energia para cuidar de sua congregação e de seu ministério. 
                        No entanto, é fundamental que você também cuide da sua saúde física, mental e espiritual. Nosso site foi criado especialmente para ajudar pastores, 
                        missionários (as) e líderes evangélicos a encontrar dicas práticas e eficazes para manter o equilíbrio entre a saúde e o ministério.
                    </p>
                    <p className="about-text">
                        Aqui, você encontrará orientações sobre avaliações médicas necessárias, alimentação saudável, práticas de exercício, saúde emocional e dicas para fortalecer 
                        sua vida espiritual, tudo com o objetivo de garantir que você esteja sempre bem, para melhor servir àqueles que Deus confiou aos seus cuidados.
                    </p>
                    <p className="about-text-bold">
                        Seu bem-estar é essencial para que sua missão seja plena e abençoada. Vamos juntos nessa caminhada rumo a uma vida mais saudável e equilibrada!
                    </p>
                </div>
                <img className="logoAbout" src={imgLogoAbout} alt="Logo Missão com Saúde"/>
            </div>
            <div className="about-spacer">
                <p className="spacer-text">
                    “E disse-lhes: Ide por todo o mundo e pregai o evangelho a toda criatura.”
                </p>
                <p className="spacer-subtext">
                    Marcos 16:15
                </p>
            </div>
        </div>
    );  
};

export default projectAbout;