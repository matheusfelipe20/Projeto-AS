import React, { useState } from "react";
import './CalculatorIMC.css';

const CalculatorIMC = () => {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [gender, setGender] = useState('masculino');
    const [result, setResult] = useState(null);
    const [category, setCategory] = useState('');

    const calcularIMC = (e) => {
        e.preventDefault();
        const imc = (weight / ((height / 100) ** 2)).toFixed(1);
        setResult(imc);
        definirCategoria(imc);
    };

    const definirCategoria = (imc) => {
        if (imc < 18.5) {
            setCategory('baixo');
        } else if (imc >= 18.5 && imc < 24.9) {
            setCategory('normal');
        } else if (imc >= 25 && imc < 29.9) {
            setCategory('excesso');
        } else if (imc >= 30 && imc < 39.9) {
            setCategory('obesidade');
        } else {
            setCategory('obesidade extrema');
        }
    };

    return (
        <div className="calculatorIMC-container">
            <h1 className="calculatorIMC-title">Calculadora de IMC</h1>
            <div className="calculatorIMC-panel">
                <form className="calculatorIMC-form" onSubmit={calcularIMC}>
                    <div className="calculatorIMC-input">
                        <label>Gênero</label>
                        <select value={gender} onChange={(e) => setGender(e.target.value)} className="calculatorIMC-select">
                            <option value="masculino">Masculino</option>
                            <option value="feminino">Feminino</option>
                        </select>
                    </div>
                    <div className="calculatorIMC-input">
                        <label>Peso (kg)</label>
                        <input 
                            type="number" 
                            value={weight} 
                            onChange={(e) => setWeight(e.target.value)} 
                            required 
                        />
                    </div>
                    <div className="calculatorIMC-input">
                        <label>Altura (cm)</label>
                        <input 
                            type="number" 
                            value={height} 
                            onChange={(e) => setHeight(e.target.value)} 
                            required 
                        />
                    </div>
                    <button type="submit" className="calculatorIMC-button">Calcular</button>
                </form>
                <div className="result-panel">
                    {result ? (
                        <div className={`result ${category}`}>
                            O seu índice de massa corporal é <strong><span className="result-imc">{result}</span></strong>, 
                            sendo assim considerado um peso <strong><span className="result-category">{category}</span></strong>.
                        </div>
                    ) : (
                        <div className="result">Sem resultado calculado</div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CalculatorIMC;
