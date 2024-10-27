import React from "react";

import './IntroIMC.css';

import imgLogoAbout from '../../../../../assets/testspage/imc/imc-intro.png';

const IntroIMC = () => {
    return(
        <div className="introIMC-container">
            <h1 className="introIMC-title">IMC</h1>
            <h4 className="introIMC-subtitle">Introdução</h4>
            <div className="introIMC-painel">
                <div className="introIMC-painel-text">
                    <p className="introIMC-text-title">Por que o IMC é essêncial para a Qualidade de Vida?</p>
                    <p className="introIMC-text">
                    O Índice de Massa Corporal (IMC) é uma ferramenta simples, mas extremamente eficaz, quando o 
                    assunto é monitorar a saúde e garantir uma melhor qualidade de vida. Ele serve como um 
                    indicador do equilíbrio entre peso e altura, ajudando a identificar se uma pessoa está dentro 
                    de uma faixa de peso considerada saudável. Essa avaliação é essencial porque o peso corporal 
                    tem um impacto direto na saúde física e mental, influenciando desde a prevenção de doenças até 
                    o bem-estar diário.
                    </p>
                    <p className="introIMC-text">
                    Manter o IMC dentro da faixa ideal está diretamente relacionado à prevenção de doenças crônicas 
                    graves, como problemas cardiovasculares, diabetes tipo 2 e condições respiratórias. Quando uma pessoa 
                    está com sobrepeso ou obesidade, a probabilidade de desenvolver essas doenças aumenta drasticamente, 
                    o que pode comprometer sua qualidade de vida a longo prazo. Além disso, o excesso de peso pode sobrecarregar 
                    articulações, levando a problemas como dores nas costas e nos joelhos, dificultando atividades cotidianas e 
                    limitando a mobilidade.
                    </p>
                </div>
                <img className="ImageIMC" src={imgLogoAbout} alt="Imagem representando uma pessoa se pesando"/>
            </div>
        </div>
    );  
};

export default IntroIMC;