import React from 'react'

export default function Contact() {
    return (
        <div>
             {/* Page Content */}
        {/* Heading Starts Here */}
        <div className="page-heading header-text">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1>Contacter Nous</h1>
                <p><a href="/">Home</a> / <span>Contacter Nous</span></p>
              </div>
            </div>
          </div>
        </div>
        {/* Heading Ends Here */}
        {/* Contact Us Starts Here */}
        <div className="contact-us">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="contact-form">
                  <form id="contact" action method="post">
                    <div className="row">
                      <div className="col-md-12 col-sm-12">
                        <fieldset>
                          <input name="name" type="text" id="name" placeholder="Your name" required />
                        </fieldset>
                      </div>
                      <div className="col-md-12 col-sm-12">
                        <fieldset>
                          <input name="email" type="text" id="email" placeholder="Your email" required />
                        </fieldset>
                      </div>
                      <div className="col-md-12 col-sm-12">
                        <fieldset>
                          <input name="subject" type="text" id="subject" placeholder="Subject" />
                        </fieldset>
                      </div>
                      <div className="col-lg-12">
                        <fieldset>
                          <textarea name="message" rows={6} id="message" placeholder="Your message" required defaultValue={""} />
                        </fieldset>
                      </div>
                      <div className="col-lg-12">
                        <fieldset>
                          <button type="submit" id="form-submit" className="main-button">Envoyer</button>
                        </fieldset>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-md-6">
                <div className="right-content">
                  <div className="section-heading">
                    <span>Contact Nous</span>
                    <h2>Rester En Contact...</h2>
                    <p>Le virtuel c’est bien, le contact humain c’est essentiel !</p>
                  </div>
                  <div className="row">
                    <div className="col-md-6 col-sm-12">
                      <ul>
                        <li><i className="fa fa-phone" /> 00216 95 17 36 25</li>
                        
                      </ul>
                    </div>
                    <div className="col-md-6 col-sm-12">
                      <ul>
                        <li><i className="fa fa-envelope" /> contact@Nest.com</li>
                        <li><i className="fa fa-globe" /> www.Nest.com</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Contact Us Ends Here */}
        {/* Map Starts Here */}
        <div id="map">
          <iframe src="https://goo.gl/maps/Y87sVZjz68Sx7Sew6" width="100%" height="520px" frameBorder={0} style={{border: 0}} allowFullScreen />
        </div>
        {/* Map Ends Here */}
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
        
    )
}
