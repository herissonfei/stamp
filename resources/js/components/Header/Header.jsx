import React from "react";
import ReactDOM from "react-dom/client";
import "./Header.css";
import "/resources/css/app.css";

export default function Header() {
    return (
        <div>
            <header className="header header--bg">
                <div className="wrapper--header">
                    <a href="/home">
                        <img
                            className="header__logo"
                            src="img/png/logo.png"
                            alt="logo Stampee"
                        />
                    </a>

                    <div className="input-bar">
                        <div className="input-bar__text">
                            <p>Avancée</p>
                            <img
                                className="icone-dropdown-arrow icone-dropdown-arrow--input-bar"
                                src="img/png/icone-dropdown-arrow-blue.png"
                                alt="fleche dropwdown"
                            />
                        </div>
                        <input
                            className="input-bar__input"
                            type="text"
                            id="input-bar"
                            name="input-bar"
                            placeholder="Trouvez une enchère"
                        />
                    </div>
                    {/* <!-- Connexion/Inscription --> */}
                    <ul className="wrapper--header menu__sous-menu menu__sous-menu--header">
                        <li className="menu__item">
                            <a href="#">Se connecter</a>
                        </li>
                        <li className="menu__item">
                            <a href="#">Devenir membre</a>
                        </li>
                    </ul>
                </div>
            </header>
        </div>
    );
}

if (document.getElementById("header")) {
    const Index = ReactDOM.createRoot(document.getElementById("header"));

    Index.render(
        <React.StrictMode>
            <Header />
        </React.StrictMode>
    );
}
