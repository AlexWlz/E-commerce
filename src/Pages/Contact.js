/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import "../Style/Contact.css";

function Contact() {
  return (
    <div className="contact conteneur_card">
      <div className="card">
        <div className="body text">
          <h2>Contact</h2>

          <div className="text">
            <p>Ville : Paris, 75012</p>
            <p>Adresse : 25 Rue Claude Tillier</p>
            <p>Email : contact@snikerz.fr</p>
            <p>Téléphone : 01 02 03 04 05</p>
          </div>
        </div>
        <h2>Google Maps</h2>
        <div className="mapouter">
          <div className="gmap_canvas">
            <iframe src="https://maps.google.com/maps?q=25%20Rue%20Claude%20Tillier,%2075012%20Paris&t=&z=15&ie=UTF8&iwloc=&output=embed"></iframe>
            <a href="https://123movies-to.org"></a>
            <br />
            <a href="https://www.embedgooglemap.net"></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
