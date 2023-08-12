import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "/resources/css/app.css";
import "./Catalogue.css";

export default function Catalogue() {
    const [bids, setBids] = useState([]);

    // checkbox CONDITION
    const [isCheckedParfaite, setIsCheckedParfaite] = useState(false);
    const [isCheckedExcellente, setIsCheckedExcellente] = useState(false);
    const [isCheckedBonne, setIsCheckedBonne] = useState(false);
    const [isCheckedMoyenne, setIsCheckedMoyenne] = useState(false);
    const [isCheckedEndommage, setIsCheckedEndommage] = useState(false);

    const handleCheckboxChangeParfaite = () => {
        setIsCheckedParfaite(!isCheckedParfaite);
    };

    const handleCheckboxChangeExcellente = () => {
        setIsCheckedExcellente(!isCheckedExcellente);
    };

    const handleCheckboxChangeBonne = () => {
        setIsCheckedBonne(!isCheckedBonne);
    };

    const handleCheckboxChangeMoyenne = () => {
        setIsCheckedMoyenne(!isCheckedMoyenne);
    };

    const handleCheckboxChangeEndommage = () => {
        setIsCheckedEndommage(!isCheckedEndommage);
    };

    // checkbox TYPE
    const [isCheckedGénéral, setIsCheckedGénéral] = useState(false);
    const [isCheckedCourrierAérien, setIsCheckedCourrierAérien] =
        useState(false);
    const [isCheckedLivret, setIsCheckedLivret] = useState(false);
    const [isCheckedPortdû, setIsCheckedPortdû] = useState(false);
    const [isCheckedCartePostale, setIsCheckedCartePostale] = useState(false);
    const [isCheckedSemiPostal, setIsCheckedSemiPostal] = useState(false);
    const [isCheckedEntierPostal, setIsCheckedEntierPostal] = useState(false);

    const handleCheckboxChangeGénéral = () => {
        setIsCheckedGénéral(!isCheckedGénéral);
    };

    const handleCheckboxChangeCourrierAérien = () => {
        setIsCheckedCourrierAérien(!isCheckedCourrierAérien);
    };

    const handleCheckboxChangeLivret = () => {
        setIsCheckedLivret(!isCheckedLivret);
    };

    const handleCheckboxChangePortdû = () => {
        setIsCheckedPortdû(!isCheckedPortdû);
    };

    const handleCheckboxChangeCartePostale = () => {
        setIsCheckedCartePostale(!isCheckedCartePostale);
    };

    const handleCheckboxChangeSemiPostal = () => {
        setIsCheckedSemiPostal(!isCheckedSemiPostal);
    };

    const handleCheckboxChangeEntierPostal = () => {
        setIsCheckedEntierPostal(!isCheckedEntierPostal);
    };

    useEffect(() => {
        axios.get("/getAllBids").then((res) => {
            // console.log(res.data);
            setBids(res.data);
        });
    }, []);

    const [selectedOption, setSelectedOption] = useState("");

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleParDefault = (event) => {
        event.preventDefault();
        console.log("par default");
        // 在这里可以使用 selectedOption 的值进行进一步处理
        // select
        // console.log("选中的选项是：", selectedOption);

        // checkbox CONDITION
        // console.log("Checkbox Parfaite 选中状态：", isCheckedParfaite);
        // console.log("Checkbox Excellente 选中状态：", isCheckedExcellente);
        // console.log("Checkbox isCheckedBonne 选中状态：", isCheckedBonne);
        // console.log("Checkbox isCheckedMoyenne 选中状态：", isCheckedMoyenne);
        // console.log(
        //     "Checkbox isCheckedEndommage 选中状态：",
        //     isCheckedEndommage
        // );

        // checkbox TYPE
        // console.log(isCheckedGénéral);
        // console.log(isCheckedCourrierAérien);
        // console.log(isCheckedLivret);
        // console.log(isCheckedPortdû);
        // console.log(isCheckedCartePostale);
        // console.log(isCheckedSemiPostal);
        // console.log(isCheckedEntierPostal);
    };

    const handleChercher = (event) => {
        event.preventDefault();
        console.log("chercher");
        // 在这里可以使用 selectedOption 的值进行进一步处理
        // select
        // console.log("选中的选项是：", selectedOption);

        // checkbox CONDITION
        // console.log("Checkbox Parfaite 选中状态：", isCheckedParfaite);
        // console.log("Checkbox Excellente 选中状态：", isCheckedExcellente);
        // console.log("Checkbox isCheckedBonne 选中状态：", isCheckedBonne);
        // console.log("Checkbox isCheckedMoyenne 选中状态：", isCheckedMoyenne);
        // console.log(
        //     "Checkbox isCheckedEndommage 选中状态：",
        //     isCheckedEndommage
        // );

        // checkbox TYPE
        // console.log(isCheckedGénéral);
        // console.log(isCheckedCourrierAérien);
        // console.log(isCheckedLivret);
        // console.log(isCheckedPortdû);
        // console.log(isCheckedCartePostale);
        // console.log(isCheckedSemiPostal);
        // console.log(isCheckedEntierPostal);
    };

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
                        {/* <form onSubmit={handleSubmit} method="GET"> */}
                        <form method="GET">
                            <section>
                                <h3>Condition</h3>
                                <div>
                                    <input
                                        type="checkbox"
                                        checked={isCheckedParfaite}
                                        onChange={handleCheckboxChangeParfaite}
                                    />
                                    <label>Parfaite</label>
                                </div>
                                <div>
                                    <input
                                        type="checkbox"
                                        checked={isCheckedExcellente}
                                        onChange={
                                            handleCheckboxChangeExcellente
                                        }
                                    />
                                    <label>Excellente</label>
                                </div>
                                <div>
                                    <input
                                        type="checkbox"
                                        checked={isCheckedBonne}
                                        onChange={handleCheckboxChangeBonne}
                                    />
                                    <label>Bonne</label>
                                </div>
                                <div>
                                    <input
                                        type="checkbox"
                                        checked={isCheckedMoyenne}
                                        onChange={handleCheckboxChangeMoyenne}
                                    />
                                    <label>Moyenne</label>
                                </div>
                                <div>
                                    <input
                                        type="checkbox"
                                        checked={isCheckedEndommage}
                                        onChange={handleCheckboxChangeEndommage}
                                    />
                                    <label>Endommagé</label>
                                </div>
                            </section>
                            <section>
                                <h3>Pays d'origine</h3>
                                <select
                                    aria-label="select-country"
                                    value={selectedOption}
                                    onChange={handleSelectChange}
                                >
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
                                            placeholder="00.00"
                                        />
                                        <span>$&nbsp;-</span>
                                    </div>
                                    <div className="wrapper--header">
                                        <input
                                            type="number"
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
                                        checked={isCheckedGénéral}
                                        onChange={handleCheckboxChangeGénéral}
                                    />
                                    <label>Général</label>
                                </div>
                                <div>
                                    <input
                                        type="checkbox"
                                        checked={isCheckedCourrierAérien}
                                        onChange={
                                            handleCheckboxChangeCourrierAérien
                                        }
                                    />
                                    <label>Courrier Aérien</label>
                                </div>
                                <div>
                                    <input
                                        type="checkbox"
                                        checked={isCheckedLivret}
                                        onChange={handleCheckboxChangeLivret}
                                    />
                                    <label>Livret</label>
                                </div>
                                <div>
                                    <input
                                        type="checkbox"
                                        checked={isCheckedPortdû}
                                        onChange={handleCheckboxChangePortdû}
                                    />
                                    <label>Port dû</label>
                                </div>
                                <div>
                                    <input
                                        type="checkbox"
                                        checked={isCheckedCartePostale}
                                        onChange={
                                            handleCheckboxChangeCartePostale
                                        }
                                    />
                                    <label>Carte postale</label>
                                </div>
                                <div>
                                    <input
                                        type="checkbox"
                                        checked={isCheckedSemiPostal}
                                        onChange={
                                            handleCheckboxChangeSemiPostal
                                        }
                                    />
                                    <label>Semi postal</label>
                                </div>
                                <div>
                                    <input
                                        type="checkbox"
                                        checked={isCheckedEntierPostal}
                                        onChange={
                                            handleCheckboxChangeEntierPostal
                                        }
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
                                            aria-label="input-year-min"
                                        />
                                        <span>-</span>
                                    </div>
                                    <input
                                        type="number"
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
                                            placeholder="00.00"
                                            aria-label="input-dimension-height"
                                        />
                                        <span>-</span>
                                    </div>
                                    <input
                                        type="number"
                                        aria-label="input-dimension-width"
                                    />
                                </div>
                            </section>
                            <div className="wrapper--header">
                                <div>
                                    {/* <a className="btn btn--text-icone">
                                        Par défaut
                                        <img
                                            width="15"
                                            src="img/png/icone-round-arrow-orange.png"
                                            alt="icone fleche par defaut"
                                        />
                                    </a> */}
                                    {/* <a className="btn btn--text-icone">
                                        Chercher
                                    </a> */}
                                    <button
                                        type="submit"
                                        onClick={handleParDefault}
                                    >
                                        <a className="btn btn--text-icone">
                                            Par défaut
                                            <img
                                                width="15"
                                                src="img/png/icone-round-arrow-orange.png"
                                                alt="icone fleche par defaut"
                                            />
                                        </a>
                                    </button>
                                    <button
                                        type="submit"
                                        onClick={handleChercher}
                                    >
                                        <a
                                            className="btn btn--text-icone"
                                            // href="#"
                                        >
                                            Chercher
                                        </a>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>

                    {/* <!-- ASIDE MOBILE RECHERCHE AVANCÉE --> */}
                    {/* 底下是手机的先不要管_______________________________________________ */}
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

                            {/* <div className="tile bg--tile">
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
                            </div> */}
                            {/* --------------开始循环 */}
                            {/* {bids.map(bid => <li key={bid.id}>{bid.name}</li>)} */}
                            {bids.map((bid) => (
                                <div className="tile bg--tile" key={bid.id}>
                                    <div className="tile__container">
                                        <div>
                                            <p className="tile__lot">
                                                Lot #<strong>{bid.id}</strong>
                                            </p>
                                            <p className="tile__lot tile__lot--red">
                                                {/* 这里之后要补上 */}
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
                                                    src={bid.imageURL}
                                                    alt="Image d'une enchère'"
                                                />
                                            </a>
                                        </div>
                                        <h3>{bid.name}</h3>
                                        <p className="tile__text">
                                            Mise courante |{" "}
                                            <span>
                                                {bid.auctionCount}&nbsp;offre
                                            </span>
                                        </p>
                                        <span>10.50$</span>
                                        <p className="tile__text-small">
                                            <small>
                                                {/* 回过头看 */}
                                                dernière offre par user2022
                                            </small>
                                        </p>
                                        <a
                                            className="btn tile__btn"
                                            href={`/enchere/${bid.id}`}
                                        >
                                            Miser
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
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
