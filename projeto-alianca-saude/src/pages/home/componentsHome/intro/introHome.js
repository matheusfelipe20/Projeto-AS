import React from "react";

import './introHome.css';
import imgIntroHome from '../../../../assets/homepage/intro/introHome.png';

const introHome = () => {
    return(
        <div className="introHome">
            <div className="text-intro">
                <p className="title-intro">
                    Este é um espaço dedicado ao cuidado de pastores e missionários(as).
                </p>
                <p className="description-intro">
                Sabemos que o ministério exige uma dedicação constante e intensa, muitas vezes demandando grande esforço físico, mental e espiritual. 
                Porém, cuidar de si mesmo é fundamental para continuar servindo com excelência. 
                É imprescindível preservar sua saúde em todas as dimensões – física, emocional e espiritual – para que sua caminhada seja plena e sustentável.
                </p>
                <p className="description-intro">
                Estamos aqui para oferecer apoio, orientação e recursos que fortalecerão tanto o seu corpo quanto a sua mente. 
                Assim, você poderá continuar cumprindo sua missão com alegria, saúde e um vigor renovado que refletirá o amor e o cuidado de Deus em sua vida.
                </p>
            </div>
            <div className="intro-img">
                <img className="img-text" src={imgIntroHome} alt="Imagem de Introdução - Coração Saudável"/>
            </div>
        </div>
    );  
};

export default introHome;