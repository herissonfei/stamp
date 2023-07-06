import React from "react";
import ReactDOM from "react-dom/client";
import "/resources/css/app.css";
import "./Bid.css";

export default function Bid() {
    return (
        <div className="tile bg--tile">
            <div className="tile__container">
                <div>
                    <p className="tile__lot">
                        Lot #<strong>23</strong>
                    </p>
                    <p className="tile__lot tile__lot--red">
                        <strong>14d-8h-56m-2s</strong>
                    </p>
                </div>
                <img
                    className="icone-coup-coeur"
                    src="img/png/icone-coup-de-coeur.png"
                    alt="icone coup de coeur lord"
                />
            </div>
            <div className="tile__wrapper">
                <div className="tile__img-wrapper">
                    <a href="enchere.html">
                        <img
                            className="tile__img"
                            src="img/jpg/hero-enchere.jpg"
                            alt="Image d'une enchère'"
                        />
                    </a>
                </div>
                <h3>CYPRUS 95 LH</h3>
                <p className="tile__text">
                    Mise courante | <span>1&nbsp;offre</span>
                </p>
                <span>10.50$</span>
                <p className="tile__text-small">
                    <small>dernière offre par user2022</small>
                </p>
                <a className="btn tile__btn" href="enchere.html">
                    Miser
                </a>
            </div>
        </div>
    );
}

if (document.getElementById("bid")) {
    const Index = ReactDOM.createRoot(document.getElementById("bid"));

    Index.render(
        <React.StrictMode>
            <Bid />
        </React.StrictMode>
    );
}
