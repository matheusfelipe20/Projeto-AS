import React from "react";

import './testHome.css';
import imgTestBurnout from '../../../assets/testBurnout.png';
import imgTestCardiovascular from '../../../assets/testCardiovascular.png'; 
import imgTestImc from '../../../assets/testImc.png';
import imgTestVocal from '../../../assets/testVocal.png'; 

const testHome = () => {
    return(
        <div className="testHome">
            <p className="test-title">Testes</p>
            <p className="test-description">
                Quer saber como anda sua saúde? Faça os testes abaixo para avaliar sua qualidade de 
                vida e descobrir como melhorar seu bem-estar.
            </p>

            <div className="list-test">
                <div className="test-banner">
                    <img className="test-banner-img" src={imgTestImc} alt="Imagem ilustrando calculando o peso"></img>
                    <p className="test-banner-title">
                       Calculadora IMC e Peso Ideal 
                    </p>
                    <a href='/' className="test-banner-button">Analisar</a>
                </div>
                <div className="test-banner">
                    <img className="test-banner-img" src={imgTestCardiovascular} alt="Imagem ilustrando risco cardiovascular"></img>
                    <p className="test-banner-title">
                        Calculadora de risco cardiovascular
                    </p>
                    <a href='/' className="test-banner-button">Analisar</a>
                </div>
                <div className="test-banner">
                    <img className="test-banner-img" src={imgTestBurnout} alt="Imagem ilustrando risco de burnout"></img>
                    <p className="test-banner-title">
                        Risco de Burnout
                    </p>
                    <a href='/' className="test-banner-button">Analisar</a>
                </div>
                <div className="test-banner">
                    <img className="test-banner-img" src={imgTestVocal} alt="Imagem ilustrando risco de fadiga vocal"></img>
                    <p className="test-banner-title">
                        Avaliação de índice de fadiga vocal 
                    </p>
                    <a href='/' className="test-banner-button">Analisar</a>
                </div>
            </div>
        </div>
    );  
};

export default testHome;