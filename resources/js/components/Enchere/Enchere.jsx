import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "/resources/css/app.css";
import "./Enchere.css";

export default function Enchere() {
    const id = window.location.pathname.split("/").pop();

    const [bid, setBid] = useState([]);

    useEffect(() => {
        axios.get(`/getOneBid/${id}`).then((res) => {
            setBid(res.data[0]);
        });
    }, []);
    console.log(bid);
    return (
        <div>
            {/* <!-- HERO --> */}
            <div className="hero hero--enchere">
                <div className="wrapper">
                    <h2>
                        Lot #{bid.id} | <span>{bid.status}</span>
                        <img
                            className="icone-coup-coeur"
                            src="/img/png/icone-coup-de-coeur.png"
                            alt="icone coup de coeur lord"
                        />
                    </h2>
                    <h1>{bid.name}</h1>
                </div>
            </div>
            {/* <!-- DETAIL ENCHERE --> */}
            <section className="bg--grey-var">
                <div className="wrapper">
                    <div className="link wrapper--header ">
                        <img
                            className="icone-link-arrow"
                            src="/img/png/icone-link-arrow-blue-left.png"
                            alt="icone fleche link"
                        />
                        <a
                            className="link--border-blue"
                            href="catalogue-enchere.html"
                        >
                            Retour au catalogue
                        </a>
                    </div>
                    <div className="pannels">
                        {/* <!-- Galerie image de l'enchère --> */}
                        <div className="gallery__container">
                            <div className="tile__img-wrapper tile__img-wrapper--enchere">
                                <img
                                    className="tile__img"
                                    src="/img/jpg/hero-enchere.jpg"
                                    alt="Image d'une enchère'"
                                />
                            </div>
                            <div className="gallery__nav">
                                <div>
                                    <a>
                                        <img
                                            width="25"
                                            src="/img/png/icone-link-arrow-blue-up.png"
                                            alt="flèche navigation galerie"
                                        />
                                    </a>
                                </div>
                                <div>
                                    <a>
                                        <img
                                            width="100"
                                            src="/img/jpg/encheres/thumbnail-enchere-3.jpg"
                                            alt="image de l'enchère"
                                        />
                                    </a>
                                </div>
                                <div>
                                    <a>
                                        <img
                                            width="100"
                                            src="/img/jpg/encheres/thumbnail-enchere-1.jpg"
                                            alt="image de l'enchère"
                                        />
                                    </a>
                                </div>
                                <div>
                                    <a>
                                        <img
                                            width="100"
                                            src="/img/jpg/encheres/thumbnail-enchere-2.jpg"
                                            alt="image de l'enchère"
                                        />
                                    </a>
                                </div>
                                <div>
                                    <a>
                                        <img
                                            width="25"
                                            src="/img/png/icone-dropdown-arrow-blue.png"
                                            alt="flèche navigation galerie"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="pannels--container">
                            <div className="pannel__detail wrapper--header">
                                {/* <!-- Navigation panneau --> */}
                                <div className="pannel__nav">
                                    <div>
                                        <img
                                            width="25"
                                            src="/img/png/icone-eye.png"
                                            alt="icone détail"
                                        />
                                        <p>Détails</p>
                                    </div>
                                    <div>
                                        <img
                                            width="25"
                                            src="/img/png/icone-round-arrow.png"
                                            alt="icone historique"
                                        />
                                        <p>Historique</p>
                                    </div>
                                    <div>
                                        <img
                                            width="25"
                                            src="/img/png/icone-profil.png"
                                            alt="icone vendeur"
                                        />
                                        <p>Vendeur</p>
                                    </div>
                                </div>
                                {/* <!-- Description panneau --> */}
                                <div className="pannel__text" data-js-pannel>
                                    <p className="tile__text">
                                        Mise courante | <strong>{bid.auctionCount} offre</strong>
                                    </p>
                                    <h2>{bid.reservePrice}$</h2>
                                    <p className="tile__text-small">
                                        <small>
                                            dernière offre par user2022
                                        </small>
                                    </p>
                                    <p>
                                        <strong>Description</strong> : {bid.description}
                                    </p>
                                    <p>
                                        <strong>Type</strong> : {bid.type}
                                    </p>
                                    <p>
                                        <strong>Condition</strong> : {bid.conditions}
                                    </p>
                                    <p>
                                        <strong>Format</strong> : {bid.dimensions}
                                    </p>
                                    <p>
                                        <strong>Année d'émission</strong> : {bid.creationDate}
                                    </p>
                                    <p>
                                        <strong>Pays d'origine</strong> :
                                        {bid.country}
                                    </p>
                                </div>
                                <div
                                    className="pannel__text pannel__hidden"
                                    data-js-pannel
                                >
                                    <p>Historique</p>
                                </div>
                                <div
                                    className="pannel__text pannel__hidden"
                                    data-js-pannel
                                >
                                    <p>Vendeur</p>
                                </div>
                            </div>
                            {/* <!-- Form miser enchère panneau --> */}
                            <div className="pannel__form grid">
                                <div>
                                    <p>Ferme dans</p>
                                    <p className="tile__lot tile__lot--red">
                                        <strong>21d-11h-12m-11s</strong>
                                    </p>
                                    <small>Début: 01/03/2022 | 00H00</small>
                                    <br />
                                    <small>Fin: 22/03/2022 | 00H00</small>
                                </div>
                                <div className="grid grid--3-btn">
                                    <input
                                        type="number"
                                        name="prix"
                                        placeholder="min 10.70"
                                    />
                                    <a className="btn" href="enchere.html">
                                        Miser
                                    </a>
                                    <a className="btn" href="enchere.html">
                                        Min
                                    </a>
                                </div>
                                <ul>
                                    <li>Pays d'envoi : Royaume-Uni</li>
                                    <li>Livraison internationale gratuite</li>
                                    <li>Certification garantie</li>
                                </ul>
                                <img
                                    width="150"
                                    src="/img/png/icone-payment.png"
                                    alt="icone options paiement"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ENCHÈRES SIMILAIRES --> */}
            <div className="wrapper">
                <section>
                    <div className="link wrapper--header ">
                        <h2>Dans la même catégorie</h2>
                        <a className="link--border-blue" href="#">
                            Tout&nbsp;afficher
                        </a>
                        <img
                            className="icone-link-arrow"
                            src="/img/png/icone-link-arrow-blue.png"
                            alt="icone fleche link"
                        />
                    </div>
                    <div className="grid grid--5-second-var">
                        <div className="tile bg--tile">
                            <div className="tile__container">
                                <div>
                                    <p className="tile__lot">
                                        Lot #<strong>01</strong>
                                    </p>
                                    <p className="tile__lot tile__lot--red">
                                        <strong>14d-8h-56m-2s</strong>
                                    </p>
                                </div>
                                <img
                                    className="icone-coup-coeur"
                                    src="/img/png/icone-coup-de-coeur.png"
                                    alt="icone coup de coeur lord"
                                />
                            </div>
                            <div className="tile__wrapper">
                                <div className="tile__img-wrapper">
                                    <img
                                        className="tile__img"
                                        src="/img/jpg/encheres/timbre-1.jpg"
                                        alt="Image d'une enchère'"
                                    />
                                </div>
                                <h3>Gold Coast 115-27-LH</h3>
                                <p className="tile__text">
                                    Mise courante | <span>1 offre</span>
                                </p>
                                <span>350.00$</span>
                                <p className="tile__text-small">
                                    <small>dernière offre par user2022</small>
                                </p>
                                <a
                                    className="btn tile__btn"
                                    href="enchere.html"
                                >
                                    Miser
                                </a>
                            </div>
                        </div>
                        <div className="tile bg--tile">
                            <div className="tile__container">
                                <div>
                                    <p className="tile__lot">
                                        Lot #<strong>102</strong>
                                    </p>
                                    <p className="tile__lot tile__lot--red">
                                        <strong>1d-7h-06m-28s</strong>
                                    </p>
                                </div>
                            </div>
                            <div className="tile__wrapper">
                                <div className="tile__img-wrapper">
                                    <img
                                        className="tile__img"
                                        src="/img/jpg/encheres/timbre-2.jpg"
                                        alt="Image d'une enchère'"
                                    />
                                </div>
                                <h3>US California Scott #1</h3>
                                <p className="tile__text">
                                    Mise courante | <span>5 offres</span>
                                </p>
                                <span>259.00$</span>
                                <p className="tile__text-small">
                                    <small>dernière offre par user2022</small>
                                </p>
                                <a
                                    className="btn tile__btn"
                                    href="enchere.html"
                                >
                                    Miser
                                </a>
                            </div>
                        </div>
                        <div className="tile bg--tile">
                            <div className="tile__container">
                                <div>
                                    <p className="tile__lot">
                                        Lot #<strong>45</strong>
                                    </p>
                                    <p className="tile__lot tile__lot--red">
                                        <strong>9d-1h-40m-24s</strong>
                                    </p>
                                </div>
                            </div>
                            <div className="tile__wrapper">
                                <div className="tile__img-wrapper">
                                    <img
                                        className="tile__img"
                                        src="/img/jpg/encheres/timbre-3.jpg"
                                        alt="Image d'une enchère"
                                    />
                                </div>
                                <h3>USA 1857 Scott #36 Used. Deep color</h3>
                                <p className="tile__text">
                                    Mise courante | <span>10 offres</span>
                                </p>
                                <span>79.00$</span>
                                <p className="tile__text-small">
                                    <small>dernière offre par user2022</small>
                                </p>
                                <a
                                    className="btn tile__btn"
                                    href="enchere.html"
                                >
                                    Miser
                                </a>
                            </div>
                        </div>
                        <div className="tile bg--tile">
                            <div className="tile__container">
                                <div>
                                    <p className="tile__lot">
                                        Lot #<strong>121</strong>
                                    </p>
                                    <p className="tile__lot tile__lot--red">
                                        <strong>10h-50m-05s</strong>
                                    </p>
                                </div>
                                <img
                                    className="icone-coup-coeur"
                                    src="/img/png/icone-coup-de-coeur.png"
                                    alt="icone coup de coeur lord"
                                />
                            </div>
                            <div className="tile__wrapper">
                                <div className="tile__img-wrapper">
                                    <img
                                        className="tile__img"
                                        src="/img/jpg/encheres/timbre-4.jpg"
                                        alt="Image d'une enchère"
                                    />
                                </div>
                                <h3>AFFORDABLE GENUINE SCOTT USED SET</h3>
                                <p className="tile__text">
                                    Mise courante | <span>2 offres</span>
                                </p>
                                <span>150.00$</span>
                                <p className="tile__text-small">
                                    <small>dernière offre par user2022</small>
                                </p>
                                <a
                                    className="btn tile__btn"
                                    href="enchere.html"
                                >
                                    Miser
                                </a>
                            </div>
                        </div>
                        <div className="tile bg--tile">
                            <div className="tile__container">
                                <div>
                                    <p className="tile__lot">
                                        Lot #<strong>67</strong>
                                    </p>
                                    <p className="tile__lot tile__lot--red">
                                        <strong>21d-11h-12m-11s</strong>
                                    </p>
                                </div>
                            </div>
                            <div className="tile__wrapper">
                                <div className="tile__img-wrapper">
                                    <img
                                        className="tile__img"
                                        src="/img/jpg/encheres/timbre-5.jpg"
                                        alt="Image d'une enchère"
                                    />
                                </div>
                                <h3>
                                    Used 50¢ XF Well Centered GEM With PFC
                                    Graded
                                </h3>
                                <p className="tile__text">
                                    Mise courante | <span>Aucune offre</span>
                                </p>
                                <span>10.00$</span>
                                <p className="tile__text-small">
                                    <small>dernière offre par user2022</small>
                                </p>
                                <a
                                    className="btn tile__btn"
                                    href="enchere.html"
                                >
                                    Miser
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

if (document.getElementById("enchere")) {
    const Index = ReactDOM.createRoot(document.getElementById("enchere"));

    Index.render(
        <React.StrictMode>
            <Enchere />
        </React.StrictMode>
    );
}
