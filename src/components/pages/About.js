import React from 'react'

export default function About() {
    return (
        <div>
            
        {/* Page Content */}
        {/* Heading Starts Here */}
        <div className="page-heading header-text">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1>A Propos ..</h1>
                <p><a href="/">Home</a> / <span>A Propos</span></p>
              </div>
            </div>
          </div>
        </div>
        {/* Heading Ends Here */}
        {/* About Us Starts Here */}
        <div className="about-us">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="left-image">
                  <img src="assets/images/our-team.jpg" alt="" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="right-content">
                  <div className="section-heading">
                    <span>A Propos De NEST Immo</span>
                    <h2>VOUS FRAPPEZ A LA BONNE PORTE</h2>
                    <p>Nest Immobilier et à votre service pour vous accompagner, dans vos projets immobilier en fonction de vos besoins, vente, achat, Locations, Investissement, Gestion locative. NEST saura être à votre écoute. Fort de son savoir-faire, NEST  a tissé un réseau performant sur l’ensemble du département.</p>
                  </div>
                  <div id="tabs">
                    <ul>
                      <li><a href="#tabs-1">Historique</a></li>
                      <li><a href="#tabs-2">Avis</a></li>
                      <li><a href="#tabs-3">Réseaux</a></li>
                    </ul>
                    <section className="tabs-content">
                      <article id="tabs-1">
                        <p>"L’immobilier ne peut pas être perdu ou volé, et il ne peut pas être emporté. Acheté avec bon sens, payé en totalité et géré avec raison, il est le placement le plus sûr du monde"
                         </p>
                      </article>
                      <article id="tabs-2">
                        <p>"posséder une maison est la clé de la richesse - a la fois la richesse financiére et la securité émotionelle"
                          </p>
                      </article>
                      <article id="tabs-3">
                        <p>Soyez zen ! La gestion locative avec Nest Immo, n'a jamais été aussi simple.
                          </p>
                      </article>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* About Us Ends Here */}
        {/* Team Starts Here */}
        <div className="team-section">
          <div className="container">
            <div className="row">
              <div className="col-md-8 offset-md-2">
                <div className="section-heading">
                  <span>Rencontrer Notre Equipe</span>
                  <h2>...Une équipe d'agents immobiliers impliquée dans vos projets</h2>
                  <p>Une équipe jeune, dynamique, motivée et soucieuse de mener à bien vos projets de vente, de location et d'achat immobilier ou tout simplement pour un conseil immobilier.</p>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-xs-12">
                <div className="team-item">
                  <img src="assets/images/team-01.jpg" alt="" />
                  <div className="down-content">
                    <h4>Jonathan Smart</h4>
                    <span>Chef d'agence</span>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-xs-12">
                <div className="team-item">
                  <img src="assets/images/team-02.jpg" alt="" />
                  <div className="down-content">
                    <h4>Mary Morris</h4>
                    <span>Agent immobilier</span>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-xs-12">
                <div className="team-item">
                  <img src="assets/images/team-03.jpg" alt="" />
                  <div className="down-content">
                    <h4>George White</h4>
                    <span>Agent immobilier</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Team Ends Here */}
        {/* Testimonials Starts Here */}
        &lt;<div className="testimonials-section">
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
    )
}
