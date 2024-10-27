import React from "react";
import imgNotFound from '../../assets/errors/not-found.png';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="not-found-container">
            <img className="logo-notfound" src={imgNotFound} alt="Erro 404 - Página Não Encontrada" />
            <h1>Página Não Encontrada</h1>
            <p>Desculpe, a página que você está procurando não existe.</p>
            <Link to="/home" className="back-home">Voltar para a página inicial</Link>
        </div>
    );
};

export default NotFound;