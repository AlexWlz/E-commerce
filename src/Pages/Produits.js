import React from "react";
// import { useState } from "react";
import "../Style/Produits.css";
import { listProduits } from "../Component/Produit";
import Rating from "@mui/material/Rating";
// import Typography from "@mui/material/Typography";

function Produits() {
  // const [value, setValue] = useState(0);

  return (
    <div className="produits conteneur_card">
      {listProduits.map((value, key) => (
        <div className="card produit" key={key}>
          <h2>{value.titre}</h2>
          <div className="body">
            <img src={value.img} alt="img" />
            <p>{value.description}</p>
          </div>
          <div className="footer">
            <div className="note">
                {/* <Typography component="legend">Controlled</Typography>
                <Rating
                  name="simple-controlled"
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                />
                <Typography component="legend">Read only</Typography> */}
                <Rating name="read-only" value={value.etoile} readOnly />
                {/* <Typography component="legend">Disabled</Typography>
                <Rating name="disabled" value={value} disabled />
                <Typography component="legend">No rating given</Typography>
                <Rating name="no-value" value={null} /> */}
            </div>
            <p>Prix : {value.prix} €</p>
            <button>Acheter</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Produits;
