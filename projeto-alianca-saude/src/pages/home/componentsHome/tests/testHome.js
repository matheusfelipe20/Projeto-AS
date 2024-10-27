import React from "react";
import { Link } from 'react-router-dom';

import './testHome.css';
import imgTestBurnout from '../../../../assets/homepage/testBurnout.png';
import imgTestCardiovascular from '../../../../assets/homepage/testCardiovascular.png'; 
import imgTestImc from '../../../../assets/homepage/testImc.png';
import imgTestVocal from '../../../../assets/homepage/testVocal.png'; 

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
                       Calculadora IMC
                    </p>
                    <Link className="test-banner-button" to='/test$medic/IMC'>Analisar</Link>
                </div>
                <div className="test-banner">
                    <img className="test-banner-img" src={imgTestCardiovascular} alt="Imagem ilustrando risco cardiovascular"></img>
                    <p className="test-banner-title">
                        Calculadora de risco cardiovascular
                    </p>
                    <Link className="test-banner-button" to='/'>Analisar</Link>
                </div>
                <div className="test-banner">
                    <img className="test-banner-img" src={imgTestBurnout} alt="Imagem ilustrando risco de burnout"></img>
                    <p className="test-banner-title">
                        Risco de Burnout
                    </p>
                    <Link className="test-banner-button" to='/'>Analisar</Link>
                </div>
                <div className="test-banner">
                    <img className="test-banner-img" src={imgTestVocal} alt="Imagem ilustrando risco de fadiga vocal"></img>
                    <p className="test-banner-title">
                        Avaliação de índice de fadiga vocal 
                    </p>
                    <Link className="test-banner-button" to='/'>Analisar</Link>
                </div>
            </div>
        </div>
    );  
};

export default testHome;