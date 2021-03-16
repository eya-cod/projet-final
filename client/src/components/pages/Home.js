import React from 'react';
import * as ReactBootStrap from "react-bootstrap"

import {Redirect} from 'react-router-dom' 

import { useSelector} from 'react-redux';





const Home = () => {
  const Admin = useSelector((state) => state.authReducer.user)

  return (
    <div>
      {Admin && Admin.admin  &&  <Redirect to="/Admin"/>}
 
{/* Page Content */}
        {/* Banner Starts Here */}
        <div className="banner">
          <div className="container">
            <div className="row">
              <div className="col-md-8 offset-md-2">
                <div className="header-text caption">
                  <h2 style={{marginRight:"148px"}}>Trouver le Bien De Vos Réves</h2>
                  <div id="search-section">
                    <form id="suggestion_form" name="gs" method="get" action="#">
                      <div className="searchText">
                        <input type="text" name="q" className="searchText" placeholder="Recherche..." autoComplete="on" />
                        <ul>
                          <li><label><input type="checkbox" name="ext_com" defaultValue={1} /><span>LOUER </span></label></li>
                          <li><label><input type="checkbox" name="ext_net" defaultValue={1} /><span>ACHETER</span></label></li>
                          <li><label><input type="checkbox" name="ext_org" defaultValue={1} /><span>MAISON</span></label></li>
                          <li><label><input type="checkbox" name="ext_in" defaultValue={1} /><span>APPARTEMENT</span></label></li>
                        </ul>
                      </div>
                      <input type="submit" name="results" className="main-button" defaultValue="Search Now" />
                    </form>
                    <div className="advSearch_chkbox">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Banner Ends Here */}
        {/* Trusted Starts Here */}
        <div className="trusted-section">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="trusted-section-heading">
                  <h4> LA CONFIANCE DE PLUS DE 750 CLIENTS HEUREUX PARTOUT EN TUNISIE</h4>
                </div>
              </div>
              <div className="col-md-12">
                <div className="owl-trusted owl-carousel">
                  <div className="trusted-item">
                    <img src="assets/images/transp-marron.png" alt="trusted 1" />
                  </div>
                  <div className="trusted-item">
                    <img src="assets/images/transp-marron.png" alt="trusted 2" />
                  </div>
                  <div className="trusted-item">
                    <img src="assets/images/transp-marron.png" alt="trusted 3" />
                  </div>
                  <div className="trusted-item">
                    <img src="assets/images/transp-marron.png" alt="trusted 4" />
                  </div>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Trusted Ends Here */}
        {/* Services Starts Here */}
        <div className="services-section">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="section-heading">
                  <span>Nos Services</span>
                  <h2>Services que nous fournissons</h2>
                  <p>Avec une bonne connaissance du marché immobilier local et régional, Nest immo vous propose un véritable service immobilier sur mesure.
                  Nous vous proposons un service différent avec notre mandat de recherche personnalisé. Nous mettrons tout en place pour vous dénicher votre maison ou appartement de rêve.</p>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-xs-12">
                <div className="service-item">
                  <i className="fa fa-database" />
                  <h4>Transactions immobilières</h4>
                  <p>On s’occupent de la transaction, dirigent les  problèmes des propriétaires et des locataires en leur servant d’intermédiaire.</p>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-xs-12">
                <div className="service-item">
                  <i className="fa fa-database" />
                  <h4>Ecoute et conseil</h4>
                  <p>Nos Agents vous apporterent également leus conseils et leurs savoir-faire dans la plupart des activités liées à l'immobilier. Merci de nous Contacter <a rel="nofollow" href="/contact" target="_parent">contacts</a></p>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-xs-12">
                <div className="service-item">
                  <i className="fa fa-database" />
                  <h4>Estimation</h4>
                  <p>Par ailleurs, que ce soit pour un achat ou une vente, nos Agents proposent une estimation précise de la valeur de vos biens et négocier pour obtenir un meilleur prix.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Services Ends Here */}
        {/* Pricing Starts Here */}
        <div className="pricing-section">
          <div className="background-image-pricing">
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-8 offset-md-2">
                <div className="section-heading">
                  <h2>OFFRES PHARES</h2>
                  <p>Acheter et Louer Votre Bien Immobiler En Toute Sécurité</p>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-xs-12">
                <div className="pricing-item">
                  <h4>A VENDRE</h4>
                  <div className="price">
                    <h6>350,000 TND</h6>
                    
                  </div>
                  <p> Nest Immo vous propose à la vente un bel appartement S+3 dans une résidence gardée à ENNASR, situé dans un emplacement calme</p>
                  <div className="dev" />
                  <ul>
                    <li><i className="fa fa-check" />150 m² de surface habitable</li>
                    <li><i className="fa fa-check" />3 Piéces de vie </li>
                    <li><i className="fa fa-check" />Parking sous-sol</li>
                    <li><i className="fa fa-check" />Vue dégagée</li>
                    <li><i className="fa fa-check" />Chauffage et climatisation</li>
                    <li><i className="fa fa-check" />Cuisine équipée</li>
                  </ul>
                  <a href="#" style={{backgroundColor:'grey'}} className="main-button">ACHETER</a>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-xs-12">
                <div className="pricing-item">
                  <h4>A LOUER</h4>
                  <div style={{backgroundColor:'grey'}} className="price price-gradient">
                    <h6>850 TND</h6>
                    
                  </div>
                  <p> Nest Immo vous propose un bel Appartement à louer coté BOUMHAL, située dans une résidence calme et sécurisée .</p>
                  <div className="dev" />
                  <ul>
                  <li><i className="fa fa-check" />85 m² de surface habitable</li>
                    <li><i className="fa fa-check" />3 Piéces de vie </li>
                    <li><i className="fa fa-check" />Résidence gardée</li>
                    <li><i className="fa fa-check" />Emplacement Stratigique</li>
                    <li><i className="fa fa-check" />Chauffage et climatisation</li>
                    <li><i className="fa fa-check" />Cuisine équipée</li>
                  </ul>
                  <a href="#"  className="gradient-button">LOUER </a>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-xs-12">
                <div className="pricing-item">
                  <h4>A VENDRE</h4>
                  <div className="price">
                    <h6>570,000 TND</h6>
                    
                  </div>
                  <p> Nest Immo vous propose à la vente une villa à CARTHEGE , située dans un emplacement calme, stratégique et près de toutes commodités</p>
                  <div className="dev" />
                  <ul>
                  <li><i className="fa fa-check" />Bâtie sur un terrain de 540 m²</li>
                    <li><i className="fa fa-check" />5 Piéces de vie </li>
                    <br/>
                    <li><i className="fa fa-check" /> Jardin </li>
                    <br/>
                    <li><i className="fa fa-check" />Vue Panoramique</li>
                    <li><i className="fa fa-check" />Chauffage et climatisation</li>
                    <li><i className="fa fa-check" />Cuisine équipée</li>
                  </ul>
                  <a href="#" style={{backgroundColor:'grey'}} className="main-button">ACHETER</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Pricing Ends Here */}
        {/* Features Starts Here */}
        <div className="features-section">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="section-heading">
                  <span></span>
                  <img  style={{width:'150px'}} src="assets/images/transp-marron.png"  />
                  <span>Sélectionne les locataires et organise les visites pour vous.</span>
                </div>
              </div>
              <div className="col-md-6">
                <div className="feature-item">
                  <div className="icon">
                    <img src="assets/images/feature-01.png" alt="" />
                  </div>
                  <h4>+ D’ÉCOUTE</h4>
                  <p>Chez Nest Immo, nos conseillers sont à l'écoute de vos projets avec un savoir-faire reconnu, une expérience qualitative et une connaissance pointue du terrain. C’est pourquoi, nous procédons ensemble à une estimation de votre maison, appartement ou local d’activités, afin de vous proposer un loyer en adéquation avec le marché locatif.</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="feature-item">
                  <div className="icon">
                    <img src="assets/images/feature-01.png" alt="" />
                  </div>
                  <h4>+ DE SÉRÉNITÉ</h4>
                  <p>Soyez zen ! La gestion locative avec Nest Immo, n'a jamais été aussi simple.
                  Afin de vous libérer des complexités administratives, nous prenons en charge votre dossier en respectant les obligations légales qu’induit la location d’un bien immobilier.</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="feature-item">
                  <div className="icon">
                    <img src="assets/images/feature-01.png" alt="" />
                  </div>
                  <h4>+ DE CONFIANCE</h4>
                  <p>Chez Nest Immo, nous tenons à construire une relation de confiance sur le long terme avec nos clients. Ainsi, nos conseillers basés en agence sont toujours à l’écoute et disponibles en cas de besoin, aussi bien avec vous qu’avec vos locataires.Soyez rassurés ! La transparence dans la gestion de vos projets locatifs est un point essentiel et fait partie de nos valeurs.</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="feature-item">
                  <div className="icon">
                    <img src="assets/images/feature-01.png" alt="" />
                  </div>
                  <h4>+ D'ACCOMPAGNEMENT</h4>
                  <p>Nos conseillers en agence se chargent de tout en vous offrant un grand nombre de services liés à la gestion immobilière. Ils vous accompagnent tout au long de votre projet (état des lieux, encaissement et règlement des loyers, paiement des charges, aide à la déclaration des revenus fonciers, assistance juridique, gestion des contentieux, etc...</p>
                </div>
              </div>
              
            </div>
          </div>
        </div>
        {/* Features Ends Here */}
        {/* Testimonials Starts Here */}
        <div className="testimonials-section">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="section-heading">
                  <span>Témoigniages</span>
                  <h2>Avis et Citations</h2>
                </div>
              </div>
              <div className="col-md-10 offset-md-1">
                <div className="owl-testimonials owl-carousel">
                  <div className="testimonial-item">
                    <div className="icon">
                      <i className="fa fa-quote-right" />
                    </div>
                    <p>"J'ai dû louer un nouveau logement dans l'urgence. Mon agence immobilière m'a trouvé rapidement une nouvelle coquille qui me convient parfaitement ! Merci !"</p>
                    <h4>Mmme ASIA</h4>
                    <span>Cliente</span>
                    
                  </div>
                  <div className="testimonial-item">
                    <div className="icon">
                      <i className="fa fa-quote-right" />
                    </div>
                    <p>"posséder une maison est la clé de la richesse - a la fois la richesse financiére et la securité émotionelle"</p>
                    <h4>Eya SAHLI</h4>
                    <span>Co-Fondatrice</span>
                  </div>
                  <div className="testimonial-item">
                    <div className="icon">
                      <i className="fa fa-quote-right" />
                    </div>
                    <p>"L’immobilier ne peut pas être perdu ou volé, et il ne peut pas être emporté. Acheté avec bon sens, payé en totalité et géré avec raison, il est le placement le plus sûr du monde"</p>
                    <h4>Franklin ROOSEVELT</h4>
                    <span>Président Américain</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Testimonials Ends Here */}
        {/* Footer Starts Here */}
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-sm-6 col-xs-12">
                <div className="footer-item">
                  <div className="footer-heading">
                    <h2>A Propos de Nous</h2>
                  </div>
                  <p>Créée en 2020, l’agence NEST Immobilier vous accompagne sur l’ensemble de vos projets immobiliers en mettant à votre disposition une équipe de professionnels compétents.</p>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-12">
                <div className="footer-item">
                  <div className="footer-heading">
                    <h2>A propos de Nest Immo</h2>
                  </div>
                  <ul className="footer-list">
                    <li><a href="#">Qui sommes-nous</a></li>
                    <li><a href="#">Notre agence</a></li>
                    <li><a href="#">Nos actualités</a></li>
                    <li><a href="#">Nos conseils</a></li>
                    <li><a href="#">Contact</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-12">
                <div className="footer-item">
                  <div className="footer-heading">
                    <h2>Liens Utiles</h2>
                  </div>
                  <ul className="footer-list">
                    <li><a href="#">A propos</a></li>
                    <li><a href="#">Nos Biens</a></li>
                    <li><a href="#">Nos Services</a></li>
                    <li><a href="#">Contact</a></li>
                    
                  </ul>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-12">
                <div className="footer-item">
                  <div className="footer-heading">
                    <h2>Plus d'Informations</h2>
                  </div>
                  <ul className="footer-list">
                    <li>Phone: <a href="#">+216 95 17 36 25 </a></li>
                    <li>Email: <a href="#">contact@Nest.com</a></li>
                    <li>Website: <a href="#">www.Nest.com</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-md-12">
                <div className="sub-footer">
                  <p>Copyright © 2021 Nest Immobilier
                    - Designed by EYA SAHLI</p>
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/* Footer Ends Here */}

    </div>
  );
};

export default Home;