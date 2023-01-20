import React from "react";
import robin from "../Images/robin.jpg";
import alex from "../Images/alex.jpg";
import "../Style/Equipe.css";

function Equipe() {
  return (
    <div className="equipe conteneur_card">
      <div className="card produit">
        <h2>Robin APPLAINCOURT</h2>
        <div className="body">
          <img src={robin} alt="img" />
        </div>
        <div className="footer">
          <p>Fondateur / Directeur</p>
        </div>
      </div>
      <div className="card produit">
        <h2>Alexis WALLEZ</h2>
        <div className="body">
          <img src={alex} alt="img" />
        </div>
        <div className="footer">
          <p>Développeur Web</p>
        </div>
      </div>
    </div>
  );
}

export default Equipe;
