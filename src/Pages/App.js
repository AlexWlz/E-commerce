import React, { useState } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import "../Style/Navbar.css";
import "../Style/Footer.css";
import "../Style/App.css";
import Contact from "./Contact";
import Accueil from "./Accueil";
import Produits from "./Produits";
import Equipe from "./Equipe";
import Mentions from "./Mentions";
import logo from "../Images/snikerz-logo.png";
import { TbMenu2 } from "react-icons/tb";
import { IoMdClose } from "react-icons/io";

function App() {
  const [burger, setBurger] = useState(false);

  const Burger = () => {
    if (!burger) {
      setBurger(true);
    } else {
      setBurger(false);
    }
    console.log(burger);
  };

  return (
    <BrowserRouter>
      <div className="navbar">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>

        <div className="conteneur_burger">
          <div className={burger ? "burger active" : "burger"} onClick={Burger}>
            {burger ? <IoMdClose /> : <TbMenu2 />}
          </div>
        </div>

        <div className="link">
          <Link to="/">Accueil</Link>
          <Link to="/produits">Produits</Link>
          <Link to="/equipe">Notre équipe</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>

      {burger && (
        <div className="menu">
          <Link to="/" onClick={Burger}>
            Acceuil
          </Link>
          <Link to="/produits" onClick={Burger}>
            Produits
          </Link>
          <Link to="/equipe" onClick={Burger}>
            Notre équipe
          </Link>
          <Link to="/contact" onClick={Burger}>
            Contact
          </Link>
        </div>
      )}

      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/produits" element={<Produits />} />
        <Route path="/equipe" element={<Equipe />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mentions" element={<Mentions />} />
      </Routes>

      <div className="footer">
        <Link to="/mentions">Mentions Légales</Link>
        <p>© Snikerz 2022 – All rights reserved </p>
      </div>
    </BrowserRouter>
  );
}

export default App;
