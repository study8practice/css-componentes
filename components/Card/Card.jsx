import React from 'react';
import "./estilo.css";

const Card = () => {

  return (
    <section className="card-nota">
        <header className="card-nota_cabecalho">
          <h3 className="card-nota_titulo">titulo</h3>
        </header>
        <p className="card-nota_texto">texto</p>
      </section>
  );
};

export default Card;