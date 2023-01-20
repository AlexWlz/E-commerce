import React from "react";
import "../Style/Accueil.css";

function Acceuil() {
  return (
    <div className="accueil conteneur_card">
      <div className="card">
        <h2>Presentation</h2>
        <p>
          Nous sommes un sites d'e-commerce qui propose la vente des meilleures
          paires du marché.
        </p>
      </div>
      <div className="card">
        <h2>Vision</h2>
        <p>
          Être la plateforme mondiale de référence en matière de sneakers et de
          commerce de la culture moderne.
        </p>
      </div>
    </div>
  );
}

export default Acceuil;
