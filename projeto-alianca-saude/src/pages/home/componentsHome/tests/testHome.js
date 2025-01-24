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
            <div className="test-panel">
                <p className="test-title">Viva Bem</p>
                <p className="test-description">
                    Quer saber como está a sua saúde? Explore os testes abaixo para avaliar sua qualidade de vida 
                    e receber dicas práticas para aprimorar seu bem-estar. 
                </p>
                <p className="test-description test-obs">
                    Dê o primeiro passo para viver com mais equilíbrio e vitalidade!
                </p>
            </div>
            <div className="list-test">
                <div className="test-banner">
                    <img className="test-banner-img" src={imgTestImc} alt="Imagem ilustrando calculando o peso"></img>
                    <p className="test-banner-title">
                        Descubra seu IMC e entenda mais sobre sua saúde corporal
                    </p>
                    <Link className="test-banner-button" to='/test$medic/IMC'>Analisar</Link>
                </div>
                <div className="test-banner">
                    <img className="test-banner-img" src={imgTestCardiovascular} alt="Imagem ilustrando risco cardiovascular"></img>
                    <p className="test-banner-title">
                        Avalie seu risco cardíaco e cuide melhor do seu coração
                    </p>
                    <Link className="test-banner-button" to='/'>Analisar</Link>
                </div>
                <div className="test-banner">
                    <img className="test-banner-img" src={imgTestBurnout} alt="Imagem ilustrando risco de burnout"></img>
                    <p className="test-banner-title">
                        Identifique os sinais de Burnout e como preveni-los
                    </p>
                    <Link className="test-banner-button" to='/'>Analisar</Link>
                </div>
                <div className="test-banner">
                    <img className="test-banner-img" src={imgTestVocal} alt="Imagem ilustrando risco de fadiga vocal"></img>
                    <p className="test-banner-title">
                        Avalie o nível de cansaço da sua voz
                    </p>
                    <Link className="test-banner-button" to='/'>Analisar</Link>
                </div>
            </div>
        </div>
    );  
};

export default testHome;