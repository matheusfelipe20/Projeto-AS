import React from "react";

import './consultHome.css';

const consultHome = () => {
    return(
        <div className="consultHome">
            <p className="consult-title">Check UP!</p>
            <p className="consult-description">
            Descubra quais profissionais de saúde são recomendados para sua avaliação anual, considerando sua faixa etária e sexo.
            </p>
            <a href="/" className="consult-button">
                Conferir
            </a>
        </div>
    );  
};

export default consultHome;