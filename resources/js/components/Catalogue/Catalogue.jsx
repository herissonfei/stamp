import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "/resources/css/app.css";
import "./Catalogue.css";
// import Bid from "../Bid/Bid";

export default function Catalogue() {
    useEffect(() => {
        axios.get("/test").then((res) => {
            console.log(res.data);
        });
    }, []);
    return (
        <div>
            {/* <!-- HERO --> */}
            <div className="hero hero--page-interieure">
                <div className="wrapper">
                    <h1 className="hero__text">Parcourez nos enchères</h1>
                    <h2 className="hero__text--sous-titre">
                        Trouvez la perle rare
                    </h2>
                    <a className="btn" href="#">
                        Fonctionnement
                    </a>
                    <a className="btn" href="#">
                        Certification
                    </a>
                </div>
            </div>

            {/* <!-- menu secondaire BARRE RECHERCHE --> */}
            <div className="menu-secondaire">
                <div className="wrapper wrapper--menu-secondaire">
                    <ul className="menu-secondaire__container">
                        <li className="menu__item menu__item--principal">
                            <a className="menu__link" href="#">
                                En cours
                            </a>
                        </li>
                        <li className="menu__item menu__item--principal">
                            <a className="menu__link" href="#">
                                Archive
                            </a>
                        </li>
                    </ul>
                    <select
                        className="menu-secondaire__select"
                        aria-label="select-sort-order"
                        defaultValue="Trier"
                    >
                        <option disabled>Trier</option>
                        <option value="tous">Tous</option>
                        <option value="decroissant">Prix décroissant</option>
                        <option value="croissant">Prix croissant</option>
                        <option value="popularite">Par popularité</option>
                        <option value="nouvellement-liste">
                            Nouvellement listée
                        </option>
                        <option value="termine-bientot">
                            Se terminant bientôt
                        </option>
                    </select>
                    <div className="wrapper--header menu-secondaire__icone">
                        <div className="btn">
                            <img
                                src="img/png/icone-gallery-1.png"
                                alt="gallerie vertical"
                            />
                        </div>
                        <div className="btn">
                            <img
                                src="img/png/icone-gallery-2.png"
                                alt="gallerie horizontal"
                            />
                        </div>
                    </div>
                </div>
                {/* <button className="burger burger-search btn" aria-label="burger" data-js-search>Recherche Avancée<img width="5"
					src="img/png/icone-link-arrow.png" alt="fleche dropwdown" />
			</button> */}
            </div>
            <div className="menu__nav-page menu__nav-page-wrapper">
                <div>
                    <a>
                        <img
                            width="10"
                            src="img/png/icone-link-arrow-blue-left.png"
                            alt="fleche dropwdown"
                        />
                    </a>
                </div>
                <div>
                    <a>
                        <span>1</span>
                    </a>
                </div>
                <div>
                    <a>
                        <span>2</span>
                    </a>
                </div>
                <div>
                    <a>
                        <span>3</span>
                    </a>
                </div>
                <div>
                    <a>
                        <span>4</span>
                    </a>
                </div>
                <div>
                    <a>
                        <span>5</span>
                    </a>
                </div>
                <div>
                    <a>
                        <span>...</span>
                    </a>
                </div>
                <div>
                    <a>
                        <span>8</span>
                    </a>
                </div>
                <div>
                    <a>
                        <img
                            width="10"
                            src="img/png/icone-link-arrow-blue.png"
                            alt="fleche dropwdown"
                        />
                    </a>
                </div>
            </div>
            {/* <!-- GALLERIE ENCHÈRES --> */}
            <div className="wrapper gallery">
                <div className="wrapper--header">
                    {/* <!-- RECHERCHE AVANCÉE --> */}
                    <div className="search-bar search-bar--desktop">
                        <h2>Recherche Avancée</h2>
                        <form method="GET">
                            <section>
                                <h3>Condition</h3>
                                <div>
                                    <input
                                        type="checkbox"
                                        id="parfaite"
                                        value="parfaite"
                                        name="parfaite"
                                    />
                                    <label>Parfaite</label>
                                </div>
                                <div>
                                    <input
                                        type="checkbox"
                                        id="excellente"
                                        value="excellente"
                                        name="excellente"
                                    />
                                    <label>Excellente</label>
                                </div>
                                <div>
                                    <input
                                        type="checkbox"
                                        id="bonne"
                                        value="bonne"
                                    />
                                    <label>Bonne</label>
                                </div>
                                <div>
                                    <input
                                        type="checkbox"
                                        id="moyenne"
                                        value="moyenne"
                                        name="moyenne"
                                    />
                                    <label>Moyenne</label>
                                </div>
                                <div>
                                    <input
                                        type="checkbox"
                                        id="endommage"
                                        value="endommage"
                                        name="endommage"
                                    />
                                    <label>Endommagé</label>
                                </div>
                            </section>
                            <section>
                                <h3>Pays d'origine</h3>
                                <select aria-label="select-country">
                                    <option defaultValue value="tous">
                                        Tous les pays
                                    </option>
                                    <option value="royaume-uni">
                                        Royaume-Uni
                                    </option>
                                    <option value="etats-unis">
                                        États-unis
                                    </option>
                                    <option value="canada">Canada</option>
                                    <option value="australie">Australie</option>
                                    <option value="chine">Chine</option>
                                    <option value="france">France</option>
                                    <option value="espagne">Espagne</option>
                                </select>
                            </section>
                            <section>
                                <h3>Prix</h3>
                                <div className="wrapper--header">
                                    <div className="wrapper--header">
                                        <input
                                            type="number"
                                            name="prix"
                                            placeholder="00.00"
                                        />
                                        <span>$&nbsp;-</span>
                                    </div>
                                    <div className="wrapper--header">
                                        <input
                                            type="number"
                                            name="prix"
                                            aria-label="input-price"
                                        />
                                        <span>$</span>
                                    </div>
                                </div>
                            </section>
                            <section>
                                <h3>Type</h3>
                                <div>
                                    {/* 这一块的name可能需要删除 */}
                                    <input
                                        type="checkbox"
                                        id="general"
                                        value="general"
                                        name="general"
                                    />
                                    <label>Général</label>
                                </div>
                                <div>
                                    <input
                                        type="checkbox"
                                        id="aerien"
                                        value="aerien"
                                        name="aerien"
                                    />
                                    <label>Courrier Aérien</label>
                                </div>
                                <div>
                                    <input
                                        type="checkbox"
                                        id="livret"
                                        value="livret"
                                    />
                                    <label>Livret</label>
                                </div>
                                <div>
                                    <input
                                        type="checkbox"
                                        id="port-du"
                                        value="port-du"
                                        name="port-du"
                                    />
                                    <label>Port dû</label>
                                </div>
                                <div>
                                    <input
                                        type="checkbox"
                                        id="carte-postale"
                                        value="carte-postale"
                                    />
                                    <label>Carte postale</label>
                                </div>
                                <div>
                                    <input
                                        type="checkbox"
                                        id="semi-postal"
                                        value="semi-postal"
                                        name="semi-postal"
                                    />
                                    <label>Semi postal</label>
                                </div>
                                <div>
                                    <input
                                        type="checkbox"
                                        id="entier-postal"
                                        value="entier-postal"
                                        name="entier-postal"
                                    />
                                    <label>Entier postal</label>
                                </div>
                            </section>
                            <section>
                                <h3>Année d'émission</h3>
                                <div className="wrapper--header">
                                    <div className="wrapper--header">
                                        <input
                                            type="number"
                                            name="annee"
                                            aria-label="input-year-min"
                                        />
                                        <span>-</span>
                                    </div>
                                    <input
                                        type="number"
                                        name="annee"
                                        aria-label="input-year-max"
                                    />
                                </div>
                            </section>
                            <section>
                                <h3>Dimensions (pouces)</h3>
                                <div className="wrapper--header">
                                    <div className="wrapper--header">
                                        <input
                                            type="number"
                                            name="dimension"
                                            placeholder="00.00"
                                            aria-label="input-dimension-height"
                                        />
                                        <span>-</span>
                                    </div>
                                    <input
                                        type="number"
                                        name="dimension"
                                        aria-label="input-dimension-width"
                                    />
                                </div>
                            </section>
                            <div className="wrapper--header">
                                <div>
                                    <a className="btn btn--text-icone">
                                        Par défaut
                                        <img
                                            width="15"
                                            src="img/png/icone-round-arrow-orange.png"
                                            alt="icone fleche par defaut"
                                        />
                                    </a>
                                    <a className="btn btn--text-icone" href="#">
                                        Chercher
                                    </a>
                                </div>
                            </div>
                        </form>
                    </div>

                    {/* <!-- ASIDE MOBILE RECHERCHE AVANCÉE --> */}
                    <aside
                        className="menu__mobile menu--close menu__mobile--white"
                        aria-label="aside-search-close"
                        data-js-search-bar
                    >
                        {/* <!-- Bouton close --> */}
                        <div
                            className="menu__close--wrapper"
                            data-js-close-search-bar
                        >
                            <button
                                className="menu__close"
                                aria-label="aside-search-close-btn"
                            ></button>
                        </div>

                        <div className="search-bar search-bar--mobile">
                            <form method="GET">
                                <section>
                                    <h3>Condition</h3>
                                    <select aria-label="select-condition">
                                        <option defaultValue value="tous">
                                            Tous
                                        </option>
                                        <option value="parfaite">
                                            Parfaite
                                        </option>
                                        <option value="excellente">
                                            excellente
                                        </option>
                                        <option value="bonne">Bonne</option>
                                        <option value="moyenne">Moyenne</option>
                                        <option value="endommage">
                                            Endommagé
                                        </option>
                                    </select>
                                </section>
                                <section>
                                    <h3>Pays d'origine</h3>
                                    <select aria-label="mobile-select-country">
                                        <option defaultValue value="tous">
                                            Tous les pays
                                        </option>
                                        <option value="royaume-uni">
                                            Royaume-Uni
                                        </option>
                                        <option value="etats-unis">
                                            États-unis
                                        </option>
                                        <option value="canada">Canada</option>
                                        <option value="australie">
                                            Australie
                                        </option>
                                        <option value="chine">Chine</option>
                                        <option value="france">France</option>
                                        <option value="espagne">Espagne</option>
                                    </select>
                                </section>
                                <section>
                                    <h3>Prix</h3>
                                    <div className="wrapper--header">
                                        <div className="wrapper--header">
                                            <input
                                                type="number"
                                                name="prix"
                                                placeholder="00.00"
                                            />
                                            <span>$&nbsp;-</span>
                                        </div>
                                        <div className="wrapper--header">
                                            <input
                                                type="number"
                                                name="prix"
                                                aria-label="mobile-input-price"
                                            />
                                            <span>$</span>
                                        </div>
                                    </div>
                                </section>
                                <section>
                                    <h3>Type</h3>
                                    <select aria-label="select-type">
                                        <option defaultValue value="tous">
                                            Tous
                                        </option>
                                        <option value="general">Général</option>
                                        <option value="courier">Courier</option>
                                        <option value="livret">Livret</option>
                                        <option value="port-du">Port dû</option>
                                        <option value="carte-postale">
                                            Carte postale
                                        </option>
                                        <option value="semi-postal">
                                            Semi postal
                                        </option>
                                        <option value="entier-postal">
                                            Entier postal
                                        </option>
                                    </select>
                                </section>
                                <section>
                                    <h3>Année d'émission</h3>
                                    <div className="wrapper--header">
                                        <div className="wrapper--header">
                                            <input
                                                type="number"
                                                name="annee"
                                                aria-label="mobile-input-year-min"
                                            />
                                            <span>-</span>
                                        </div>
                                        <input
                                            type="number"
                                            name="annee"
                                            aria-label="mobile-input-year-max"
                                        />
                                    </div>
                                </section>
                                <section>
                                    <h3>Dimensions (pouces)</h3>
                                    <div className="wrapper--header">
                                        <div className="wrapper--header">
                                            <input
                                                type="number"
                                                name="dimension"
                                                placeholder="00.00"
                                                aria-label="mobile-input-dimension-height"
                                            />
                                            <span>-</span>
                                        </div>
                                        <input
                                            type="number"
                                            name="dimension"
                                            aria-label="mobile-input-dimension-width"
                                        />
                                    </div>
                                </section>
                                <div className="wrapper--header-mobile">
                                    <div>
                                        <a className="btn btn--text-icone">
                                            Par défaut
                                            <img
                                                src="img/png/icone-round-arrow-orange.png"
                                                alt="icone fleche par defaut"
                                            />
                                        </a>
                                        <a
                                            className="btn btn--text-icone"
                                            href="#"
                                        >
                                            Chercher
                                        </a>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </aside>

                    {/* <!-- CATALOGUE ENCHÈRES --> */}
                    <div className="wrapper--gallery">
                        <p className="gallery__text">
                            142 enchères trouvées | 0 - 20 de 142
                        </p>
                        <div className="grid grid--5-var">
                            {/* <Bid></Bid> */}
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
                                        Mise courante |{" "}
                                        <span>1&nbsp;offre</span>
                                    </p>
                                    <span>10.50$</span>
                                    <p className="tile__text-small">
                                        <small>
                                            dernière offre par user2022
                                        </small>
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
                        {/* <div className="grid grid--5-var">
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
                                        Mise courante |{" "}
                                        <span>1&nbsp;offre</span>
                                    </p>
                                    <span>10.50$</span>
                                    <p className="tile__text-small">
                                        <small>
                                            dernière offre par user2022
                                        </small>
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
                                            src="img/jpg/encheres/timbre-2.jpg"
                                            alt="Image d'une enchère'"
                                        />
                                    </div>
                                    <h3>US California Scott #1</h3>
                                    <p className="tile__text">
                                        Mise courante |{" "}
                                        <span>5&nbsp;offres</span>
                                    </p>
                                    <span>259.00$</span>
                                    <p className="tile__text-small">
                                        <small>
                                            dernière offre par user2022
                                        </small>
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
                                            src="img/jpg/encheres/timbre-3.jpg"
                                            alt="Image d'une enchère"
                                        />
                                    </div>
                                    <h3>USA 1857 Scott #36 Used. Deep color</h3>
                                    <p className="tile__text">
                                        Mise courante |{" "}
                                        <span>10&nbsp;offres</span>
                                    </p>
                                    <span>79.00$</span>
                                    <p className="tile__text-small">
                                        <small>
                                            dernière offre par user2022
                                        </small>
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
                                        src="img/png/icone-coup-de-coeur.png"
                                        alt="icone coup de coeur lord"
                                    />
                                </div>
                                <div className="tile__wrapper">
                                    <div className="tile__img-wrapper">
                                        <img
                                            className="tile__img"
                                            src="img/jpg/encheres/timbre-4.jpg"
                                            alt="Image d'une enchère"
                                        />
                                    </div>
                                    <h3>AFFORDABLE GENUINE SCOTT USED SET</h3>
                                    <p className="tile__text">
                                        Mise courante |{" "}
                                        <span>2&nbsp;offres</span>
                                    </p>
                                    <span>150.00$</span>
                                    <p className="tile__text-small">
                                        <small>
                                            dernière offre par user2022
                                        </small>
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
                                            src="img/jpg/encheres/timbre-5.jpg"
                                            alt="Image d'une enchère"
                                        />
                                    </div>
                                    <h3>
                                        Used 50¢ XF Well Centered GEM With PFC
                                        Graded
                                    </h3>
                                    <p className="tile__text">
                                        Mise courante |{" "}
                                        <span>Aucune&nbsp;offre</span>
                                    </p>
                                    <span>10.00$</span>
                                    <p className="tile__text-small">
                                        <small>
                                            dernière offre par user2022
                                        </small>
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
                                            Lot #<strong>01</strong>
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
                                        <img
                                            className="tile__img"
                                            src="img/jpg/encheres/timbre-1.jpg"
                                            alt="Image d'une enchère'"
                                        />
                                    </div>
                                    <h3>Gold Coast 115-27-LH</h3>
                                    <p className="tile__text">
                                        Mise courante |{" "}
                                        <span>1&nbsp;offre</span>
                                    </p>
                                    <span>350.00$</span>
                                    <p className="tile__text-small">
                                        <small>
                                            dernière offre par user2022
                                        </small>
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
                                            src="img/jpg/encheres/timbre-2.jpg"
                                            alt="Image d'une enchère'"
                                        />
                                    </div>
                                    <h3>US California Scott #1</h3>
                                    <p className="tile__text">
                                        Mise courante |{" "}
                                        <span>5&nbsp;offres</span>
                                    </p>
                                    <span>259.00$</span>
                                    <p className="tile__text-small">
                                        <small>
                                            dernière offre par user2022
                                        </small>
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
                                            src="img/jpg/encheres/timbre-3.jpg"
                                            alt="Image d'une enchère"
                                        />
                                    </div>
                                    <h3>USA 1857 Scott #36 Used. Deep color</h3>
                                    <p className="tile__text">
                                        Mise courante |{" "}
                                        <span>10&nbsp;offres</span>
                                    </p>
                                    <span>79.00$</span>
                                    <p className="tile__text-small">
                                        <small>
                                            dernière offre par user2022
                                        </small>
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
                                        src="img/png/icone-coup-de-coeur.png"
                                        alt="icone coup de coeur lord"
                                    />
                                </div>
                                <div className="tile__wrapper">
                                    <div className="tile__img-wrapper">
                                        <img
                                            className="tile__img"
                                            src="img/jpg/encheres/timbre-4.jpg"
                                            alt="Image d'une enchère"
                                        />
                                    </div>
                                    <h3>AFFORDABLE GENUINE SCOTT USED SET</h3>
                                    <p className="tile__text">
                                        Mise courante |{" "}
                                        <span>2&nbsp;offres</span>
                                    </p>
                                    <span>150.00$</span>
                                    <p className="tile__text-small">
                                        <small>
                                            dernière offre par user2022
                                        </small>
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
                                            src="img/jpg/encheres/timbre-5.jpg"
                                            alt="Image d'une enchère"
                                        />
                                    </div>
                                    <h3>
                                        Used 50¢ XF Well Centered GEM With PFC
                                        Graded
                                    </h3>
                                    <p className="tile__text">
                                        Mise courante |{" "}
                                        <span>Aucune&nbsp;offre</span>
                                    </p>
                                    <span>10.00$</span>
                                    <p className="tile__text-small">
                                        <small>
                                            dernière offre par user2022
                                        </small>
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
                                            Lot #<strong>01</strong>
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
                                        <img
                                            className="tile__img"
                                            src="img/jpg/encheres/timbre-1.jpg"
                                            alt="Image d'une enchère'"
                                        />
                                    </div>
                                    <h3>Gold Coast 115-27-LH</h3>
                                    <p className="tile__text">
                                        Mise courante |{" "}
                                        <span>1&nbsp;offre</span>
                                    </p>
                                    <span>350.00$</span>
                                    <p className="tile__text-small">
                                        <small>
                                            dernière offre par user2022
                                        </small>
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
                                            src="img/jpg/encheres/timbre-2.jpg"
                                            alt="Image d'une enchère'"
                                        />
                                    </div>
                                    <h3>US California Scott #1</h3>
                                    <p className="tile__text">
                                        Mise courante |{" "}
                                        <span>5&nbsp;offres</span>
                                    </p>
                                    <span>259.00$</span>
                                    <p className="tile__text-small">
                                        <small>
                                            dernière offre par user2022
                                        </small>
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
                                            src="img/jpg/encheres/timbre-3.jpg"
                                            alt="Image d'une enchère"
                                        />
                                    </div>
                                    <h3>USA 1857 Scott #36 Used. Deep color</h3>
                                    <p className="tile__text">
                                        Mise courante |{" "}
                                        <span>10&nbsp;offres</span>
                                    </p>
                                    <span>79.00$</span>
                                    <p className="tile__text-small">
                                        <small>
                                            dernière offre par user2022
                                        </small>
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
                                        src="img/png/icone-coup-de-coeur.png"
                                        alt="icone coup de coeur lord"
                                    />
                                </div>
                                <div className="tile__wrapper">
                                    <div className="tile__img-wrapper">
                                        <img
                                            className="tile__img"
                                            src="img/jpg/encheres/timbre-4.jpg"
                                            alt="Image d'une enchère"
                                        />
                                    </div>
                                    <h3>AFFORDABLE GENUINE SCOTT USED SET</h3>
                                    <p className="tile__text">
                                        Mise courante |{" "}
                                        <span>2&nbsp;offres</span>
                                    </p>
                                    <span>150.00$</span>
                                    <p className="tile__text-small">
                                        <small>
                                            dernière offre par user2022
                                        </small>
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
                                            src="img/jpg/encheres/timbre-5.jpg"
                                            alt="Image d'une enchère"
                                        />
                                    </div>
                                    <h3>
                                        Used 50¢ XF Well Centered GEM With PFC
                                        Graded
                                    </h3>
                                    <p className="tile__text">
                                        Mise courante |{" "}
                                        <span>Aucune&nbsp;offre</span>
                                    </p>
                                    <span>10.00$</span>
                                    <p className="tile__text-small">
                                        <small>
                                            dernière offre par user2022
                                        </small>
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
                                            Lot #<strong>01</strong>
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
                                        <img
                                            className="tile__img"
                                            src="img/jpg/encheres/timbre-1.jpg"
                                            alt="Image d'une enchère'"
                                        />
                                    </div>
                                    <h3>Gold Coast 115-27-LH</h3>
                                    <p className="tile__text">
                                        Mise courante |{" "}
                                        <span>1&nbsp;offre</span>
                                    </p>
                                    <span>350.00$</span>
                                    <p className="tile__text-small">
                                        <small>
                                            dernière offre par user2022
                                        </small>
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
                                            src="img/jpg/encheres/timbre-2.jpg"
                                            alt="Image d'une enchère'"
                                        />
                                    </div>
                                    <h3>US California Scott #1</h3>
                                    <p className="tile__text">
                                        Mise courante |{" "}
                                        <span>5&nbsp;offres</span>
                                    </p>
                                    <span>259.00$</span>
                                    <p className="tile__text-small">
                                        <small>
                                            dernière offre par user2022
                                        </small>
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
                                            src="img/jpg/encheres/timbre-3.jpg"
                                            alt="Image d'une enchère"
                                        />
                                    </div>
                                    <h3>USA 1857 Scott #36 Used. Deep color</h3>
                                    <p className="tile__text">
                                        Mise courante |{" "}
                                        <span>10&nbsp;offres</span>
                                    </p>
                                    <span>79.00$</span>
                                    <p className="tile__text-small">
                                        <small>
                                            dernière offre par user2022
                                        </small>
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
                                        src="img/png/icone-coup-de-coeur.png"
                                        alt="icone coup de coeur lord"
                                    />
                                </div>
                                <div className="tile__wrapper">
                                    <div className="tile__img-wrapper">
                                        <img
                                            className="tile__img"
                                            src="img/jpg/encheres/timbre-4.jpg"
                                            alt="Image d'une enchère"
                                        />
                                    </div>
                                    <h3>AFFORDABLE GENUINE SCOTT USED SET</h3>
                                    <p className="tile__text">
                                        Mise courante |{" "}
                                        <span>2&nbsp;offres</span>
                                    </p>
                                    <span>150.00$</span>
                                    <p className="tile__text-small">
                                        <small>
                                            dernière offre par user2022
                                        </small>
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
                                            src="img/jpg/encheres/timbre-5.jpg"
                                            alt="Image d'une enchère"
                                        />
                                    </div>
                                    <h3>
                                        Used 50¢ XF Well Centered GEM With PFC
                                        Graded
                                    </h3>
                                    <p className="tile__text">
                                        Mise courante |{" "}
                                        <span>Aucune&nbsp;offre</span>
                                    </p>
                                    <span>10.00$</span>
                                    <p className="tile__text-small">
                                        <small>
                                            dernière offre par user2022
                                        </small>
                                    </p>
                                    <a
                                        className="btn tile__btn"
                                        href="enchere.html"
                                    >
                                        Miser
                                    </a>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
                <div className="wrapper--header-page">
                    <div className="menu__nav-page menu__nav-page--var">
                        <div>
                            <a>
                                <img
                                    width="10"
                                    src="img/png/icone-link-arrow-blue-left.png"
                                    alt="fleche dropwdown"
                                />
                            </a>
                        </div>
                        <div>
                            <a>
                                <span>1</span>
                            </a>
                        </div>
                        <div>
                            <a>
                                <span>2</span>
                            </a>
                        </div>
                        <div>
                            <a>
                                <span>3</span>
                            </a>
                        </div>
                        <div>
                            <a>
                                <span>4</span>
                            </a>
                        </div>
                        <div>
                            <a>
                                <span>5</span>
                            </a>
                        </div>
                        <div>
                            <a>
                                <span>...</span>
                            </a>
                        </div>
                        <div>
                            <a>
                                <span>8</span>
                            </a>
                        </div>
                        <div>
                            <a>
                                <img
                                    width="10"
                                    src="img/png/icone-link-arrow-blue.png"
                                    alt="fleche dropwdown"
                                />
                            </a>
                        </div>
                    </div>
                    <p className="gallery__text gallery__text--right">
                        142 enchères trouvées | 0 - 20 de 142
                    </p>
                </div>
            </div>
        </div>
    );
}

if (document.getElementById("catalogue")) {
    const Index = ReactDOM.createRoot(document.getElementById("catalogue"));

    Index.render(
        <React.StrictMode>
            <Catalogue />
        </React.StrictMode>
    );
}
