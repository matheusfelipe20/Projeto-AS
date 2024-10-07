import React from "react";

import './consultHome.css';

const consultHome = () => {
    return(
        <div className="consultHome">
            <p className="consult-title">Check UP!</p>
            <p className="consult-description">Verifique por quais profissionais você deve ser avaliado anualmente conforme 
                sua faixa etária e sexo.
            </p>
            <a href="/" className="consult-button">
                Consulte Agora
            </a>
        </div>
    );  
};

export default consultHome;