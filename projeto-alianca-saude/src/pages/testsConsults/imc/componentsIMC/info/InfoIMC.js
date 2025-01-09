import React from "react";

import './InfoIMC.css';

import imageInfoIMC from '../../../../../assets/testspage/imc/imc-info.png';

const InfoIMC = () => {
    return(
        <div className="infoIMC-container">
            <h1 className="infoIMC-title">IMC</h1>
            <h4 className="infoIMC-subtitle">Informativo</h4>
            <img className="ImageInfoIMC" src={imageInfoIMC} alt="Imagem informando a tabela de peso do IMC"/>
            <div className="infoIMC-painel">
                <div className="infoIMC-painel-text">
                    <p className="infoIMC-text-title">Por que o IMC é essêncial para a Qualidade de Vida?</p>
                    <p className="infoIMC-text">
                        O grande benefício do IMC é que ele oferece uma forma prática e acessível de monitorar a saúde. 
                        Com um simples cálculo, é possível ter uma noção geral do estado do corpo e, a partir disso, 
                        adotar medidas preventivas, como ajustar a alimentação ou começar uma rotina de exercícios. 
                        Essa capacidade de fazer ajustes precoces é um dos pontos mais importantes para a manutenção da 
                        saúde, pois ajuda a evitar o desenvolvimento de complicações antes que elas se tornem problemas 
                        sérios. Além disso, o peso ideal, indicado pelo IMC, vai além da saúde física. Ele também está 
                        associado ao bem-estar psicológico. Pessoas que mantêm um peso saudável tendem a se sentir mais 
                        confiantes, energizadas e satisfeitas consigo mesmas. Isso impacta diretamente a autoestima, 
                        diminuindo o risco de problemas emocionais como ansiedade e depressão, que muitas vezes estão 
                        associados a distúrbios de peso.
                    </p>
                    <p className="infoIMC-text">
                        Outro aspecto importante é que o controle do IMC contribui para uma vida mais ativa. Quando o peso está 
                        equilibrado, o corpo funciona de forma mais eficiente, proporcionando maior disposição para realizar atividades 
                        físicas, melhorar o condicionamento e até envelhecer de maneira mais saudável. Isso se reflete em um estilo de 
                        vida mais dinâmico, menos fadiga e mais energia para as atividades diárias. Por fim, manter o IMC dentro do intervalo 
                        saudável é uma questão de longevidade e de viver bem. O controle do peso corporal é fundamental para garantir que o 
                        corpo continue funcionando de maneira eficiente ao longo dos anos, preservando a saúde física e mental. Assim, o 
                        IMC não só ajuda a prevenir doenças, mas também promove uma qualidade de vida superior, permitindo que as pessoas 
                        vivam mais e com mais saúde, bem-estar e vitalidade.
                    </p>
                </div>
            </div>

        </div>
    );  
};

export default InfoIMC;