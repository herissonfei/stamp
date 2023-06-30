import React from "react";
import ReactDOM from "react-dom/client";
import "/resources/css/app.css";
import "./Enchere.css";

export default function Enchere() {
    return (
        <div>
            {/* <!-- HERO --> */}
            <div class="hero hero--enchere">
                <div class="wrapper">
                    <h2>
                        Lot #23 | <span>En cours</span>
                        <img
                            class="icone-coup-coeur"
                            src="img/png/icone-coup-de-coeur.png"
                            alt="icone coup de coeur lord"
                        />
                    </h2>
                    <h1>CYPRUS 95 LH</h1>
                </div>
            </div>
            {/* <!-- DETAIL ENCHERE --> */}
			<section class="bg--grey-var">
				<div class="wrapper">
					<div class="link wrapper--header ">
						<img class="icone-link-arrow" src="img/png/icone-link-arrow-blue-left.png" alt="icone fleche link"/><a class="link--border-blue" href="catalogue-enchere.html">Retour au catalogue</a>
					</div>
					<div class="pannels">
						{/* <!-- Galerie image de l'enchère --> */}
						<div class="gallery__container">
							<div class="tile__img-wrapper tile__img-wrapper--enchere">
								<img class="tile__img" src="img/jpg/hero-enchere.jpg" alt="Image d'une enchère'"/>
							</div>
							<div class="gallery__nav">
								<div><a><img width="25" src="img/png/icone-link-arrow-blue-up.png" alt="flèche navigation galerie"/></a></div>
								<div><a><img width="100" src="img/jpg/encheres/thumbnail-enchere-3.jpg" alt="image de l'enchère"/></a></div>
								<div><a><img width="100" src="img/jpg/encheres/thumbnail-enchere-1.jpg" alt="image de l'enchère"/></a></div>
								<div><a><img width="100" src="img/jpg/encheres/thumbnail-enchere-2.jpg" alt="image de l'enchère"/></a></div>
								<div><a><img width="25" src="img/png/icone-dropdown-arrow-blue.png" alt="flèche navigation galerie"/></a></div>
							</div>
						</div>
						<div class="pannels--container">
							<div class="pannel__detail wrapper--header">
								{/* <!-- Navigation panneau --> */}
								<div class="pannel__nav">
									<div>
										<img width="25" src="img/png/icone-eye.png" alt="icone détail"/>
										<p>Détails</p>
									</div>
									<div>
										<img width="25" src="img/png/icone-round-arrow.png" alt="icone historique"/>
										<p>Historique</p>
									</div>
									<div>
										<img width="25" src="img/png/icone-profil.png" alt="icone vendeur"/>
										<p>Vendeur</p>
									</div>
								</div>
								{/* <!-- Description panneau --> */}
								<div class="pannel__text" data-js-pannel>
									<p class="tile__text">Mise courante | <strong>1 offre</strong></p>
									<h2>10.50$</h2>
									<p class="tile__text-small"><small>dernière offre par user2022</small></p>
									<p><strong>Description</strong> : Lorem ipsum dolor sit amet, consectetur adipis  minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate</p>
									<p><strong>Type</strong> : Générale</p>
									<p><strong>Condition</strong> : Excellente</p>
									<p><strong>Format</strong> : Bloc 2 timbres, 6 x 4 pc</p>
									<p><strong>Année d'émission</strong> : 1996</p>
									<p><strong>Pays d'origine</strong> : États-unis</p>
								</div>
								<div class="pannel__text pannel__hidden" data-js-pannel>
									<p>Historique</p>
								</div>
								<div class="pannel__text pannel__hidden" data-js-pannel>
									<p>Vendeur</p>
								</div>
							</div>
							{/* <!-- Form miser enchère panneau --> */}
							<div class="pannel__form grid">
								<div>
									<p>Ferme dans</p>
									<p class="tile__lot tile__lot--red"><strong>21d-11h-12m-11s</strong></p>
									<small>Début: 01/03/2022 | 00H00</small><br/>
									<small>Fin: 22/03/2022 | 00H00</small>
								</div>
								<div class="grid grid--3-btn">
									<input type="number" name="prix" placeholder="min 10.70"/>
									<a class="btn" href="enchere.html">Miser</a>
									<a class="btn" href="enchere.html">Min</a>
								</div>
								<ul>
									<li>Pays d'envoi : Royaume-Uni</li>
									<li>Livraison internationale gratuite</li>
									<li>Certification garantie</li>
								</ul>
								<img width="150" src="img/png/icone-payment.png" alt="icone options paiement"/>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* <!-- ENCHÈRES SIMILAIRES --> */}
			<div class="wrapper">
				<section>
					<div class="link wrapper--header ">
						<h2>Dans la même catégorie</h2>
						<a class="link--border-blue" href="#">Tout&nbsp;afficher</a><img class="icone-link-arrow" src="img/png/icone-link-arrow-blue.png" alt="icone fleche link"/>
					</div>
					<div class="grid grid--5-second-var">
						<div class="tile bg--tile">
							<div class="tile__container">
								<div>
									<p class="tile__lot">Lot #<strong>01</strong></p>
									<p class="tile__lot tile__lot--red"><strong>14d-8h-56m-2s</strong></p>
								</div>
								<img class="icone-coup-coeur" src="img/png/icone-coup-de-coeur.png" alt="icone coup de coeur lord"/>
							</div>
							<div class="tile__wrapper">
								<div class="tile__img-wrapper">
									<img class="tile__img" src="img/jpg/encheres/timbre-1.jpg" alt="Image d'une enchère'"/>
								</div>
								<h3>Gold Coast 115-27-LH</h3>
								<p class="tile__text">Mise courante | <span>1 offre</span></p>
								<span>350.00$</span>
								<p class="tile__text-small"><small>dernière offre par user2022</small></p>
								<a class="btn tile__btn" href="enchere.html">Miser</a>
							</div>
						</div>
						<div class="tile bg--tile">
							<div class="tile__container">
								<div>
									<p class="tile__lot">Lot #<strong>102</strong></p>
									<p class="tile__lot tile__lot--red"><strong>1d-7h-06m-28s</strong></p>
								</div>
							</div>
							<div class="tile__wrapper">
								<div class="tile__img-wrapper">
									<img class="tile__img" src="img/jpg/encheres/timbre-2.jpg" alt="Image d'une enchère'"/>
								</div>
								<h3>US California Scott #1</h3>
								<p class="tile__text">Mise courante | <span>5 offres</span></p>
								<span>259.00$</span>
								<p class="tile__text-small"><small>dernière offre par user2022</small></p>
								<a class="btn tile__btn" href="enchere.html">Miser</a>
							</div>
						</div>
						<div class="tile bg--tile">
							<div class="tile__container">
								<div>
									<p class="tile__lot">Lot #<strong>45</strong></p>
									<p class="tile__lot tile__lot--red"><strong>9d-1h-40m-24s</strong></p>
								</div>
							</div>
							<div class="tile__wrapper">
								<div class="tile__img-wrapper">
									<img class="tile__img" src="img/jpg/encheres/timbre-3.jpg" alt="Image d'une enchère"/>
								</div>
								<h3>USA 1857 Scott #36 Used. Deep color</h3>
								<p class="tile__text">Mise courante | <span>10 offres</span></p>
								<span>79.00$</span>
								<p class="tile__text-small"><small>dernière offre par user2022</small></p>
								<a class="btn tile__btn" href="enchere.html">Miser</a>
							</div>
						</div>
						<div class="tile bg--tile">
							<div class="tile__container">
								<div>
									<p class="tile__lot">Lot #<strong>121</strong></p>
									<p class="tile__lot tile__lot--red"><strong>10h-50m-05s</strong></p>
								</div>
								<img class="icone-coup-coeur" src="img/png/icone-coup-de-coeur.png" alt="icone coup de coeur lord"/>
							</div>
							<div class="tile__wrapper">
								<div class="tile__img-wrapper">
									<img class="tile__img" src="img/jpg/encheres/timbre-4.jpg" alt="Image d'une enchère"/>
								</div>
								<h3>AFFORDABLE GENUINE SCOTT USED SET</h3>
								<p class="tile__text">Mise courante | <span>2 offres</span></p>
								<span>150.00$</span>
								<p class="tile__text-small"><small>dernière offre par user2022</small></p>
								<a class="btn tile__btn" href="enchere.html">Miser</a>
							</div>
						</div>
						<div class="tile bg--tile">
							<div class="tile__container">
								<div>
									<p class="tile__lot">Lot #<strong>67</strong></p>
									<p class="tile__lot tile__lot--red"><strong>21d-11h-12m-11s</strong></p>
								</div>
							</div>
							<div class="tile__wrapper">
								<div class="tile__img-wrapper">
									<img class="tile__img" src="img/jpg/encheres/timbre-5.jpg" alt="Image d'une enchère"/>
								</div>
								<h3>Used 50¢ XF Well Centered GEM With PFC Graded</h3>
								<p class="tile__text">Mise courante | <span>Aucune offre</span></p>
								<span>10.00$</span>
								<p class="tile__text-small"><small>dernière offre par user2022</small></p>
								<a class="btn tile__btn" href="enchere.html">Miser</a>
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
