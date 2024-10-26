import React from "react";

import './introHome.css';
import imgIntroHome from '../../../../assets/homepage/introHome.png';

const introHome = () => {
    return(
        <div className="introHome">
            <div className="text-intro">
                <p className="title-intro">
                    Este é um espaço dedicado ao cuidado de pastores e missionários(as).
                </p>
                <p className="description-intro">
                Sabemos que o ministério exige dedicação, mas é essencial cuidar da saúde física, 
                mental e espiritual. Nosso propósito é ajudá-lo a renovar suas forças e encontrar 
                equilíbrio entre a missão e o bem-estar, para seguir firme na sua jornada de amor 
                e serviço.
                </p>
            </div>
            <div className="intro-img">
                <img className="img-text" src={imgIntroHome} alt="Imagem coração saudável"/>
            </div>
        </div>
    );  
};

export default introHome;