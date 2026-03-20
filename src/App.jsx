import React from 'react';
import Navbar from '../pages/Navbar';
import Footer from '../pages/Footer';
import './style.css';
import Counter from '../pages/Counter';

export default function App() {
  return (
    <div className="app-container">
      {/* Affichage de la Navigation */}
      <Navbar />

      <main>

       <section id="hero" className="hero-section">
  <div className="hero-overlay"></div> {/* Pour l'effet de couleur sur l'image */}
  
  <div className="hero-content">
    <span className="hero-badge">ENSEMBLE POUR UN AVENIR MEILLEUR</span>
    
    <h1 className="hero-title">
      Centre Sèwèdo pour <br />
      le <span>Bien-Être</span> Humain
    </h1>
    
    <p className="hero-description">
      Accompagner chaque enfant, chaque jeune et chaque famille vers <br />
      un développement global, dans la paix, l'équilibre et la dignité.
    </p>
    
    <div className="hero-btns">
      <a href="#about" className="btn-primary">
        Découvrir notre mission <i className="fas fa-arrow-right"></i>
      </a>
      <a href="#contact" className="btn-secondary">
        Nous contacter
      </a>
    </div>

  </div>
</section>

        <section id="about" className="about-section">
  <div className="container">
    <div className="about-header">
      <span className="section-subtitle">QUI SOMMES-NOUS</span>
      <h2 className="section-title">À propos du Centre Sèwèdo</h2>
      <p className="about-text">
        Le Centre Sèwèdo est un espace dédié au développement global et holistique des 
        enfants, des jeunes et des familles. Nous œuvrons au quotidien pour renforcer les 
        compétences, favoriser l’autonomie économique et promouvoir le bien-être dans 
        toutes ses dimensions.
      </p>
    </div>

    <div className="about-image-container">
      <img 
        src="/img/about-img.jpg" 
        alt="Équipe et bénéficiaires du centre" 
        className="about-img"
      />
    </div>

    <div className="about-cards">
  {/* Carte Vision */}
  <div className="about-card">
    <div className="card-icon-box">
      <i className="fas fa-eye"></i>
    </div>
    <h3>Notre Vision</h3>
    <p>Un monde où chaque individu — enfant, jeune ou adulte — accède à un bien-être physique, mental et social, dans un environnement de paix et de dignité.</p>
  </div>

  {/* Carte Mission */}
  <div className="about-card">
    <div className="card-icon-box">
      <i className="fas fa-bullseye"></i>
    </div>
    <h3>Notre Mission</h3>
    <p>Accompagner les communautés à travers des programmes concrets en éducation, santé, coaching et agronomie pour bâtir un développement humain durable et inclusif.</p>
  </div>

  {/* Carte Valeurs */}
  <div className="about-card">
    <div className="card-icon-box">
      <i className="fas fa-star"></i>
    </div>
    <h3>Nos Valeurs</h3>
    <p>Intégrité, solidarité, excellence et respect de la dignité humaine guident chacune de nos actions. Nous croyons en la force des valeurs culturelles et spirituelles pour transformer les vies.</p>
  </div>
</div>
  </div>
</section>


<section id="services" className="services-section">
  <div className="container">
    <div className="section-header">
      <span className="section-subtitle">NOS EXPERTISES</span>
      <h2 className="section-title">Domaines d'intervention</h2>
      <p className="section-description">
        Quatre piliers  au service du développement intégral des communautés.
      </p>
    </div>

    <div className="services-grid">
      {/* Pôle 1 */}
      <div className="service-card">
        <div className="service-img" style={{backgroundImage: 'url("/img/service2.jpg")'}}></div>
        <div className="service-content">
          <div className="service-icon"><i className="fas fa-user-graduate"></i></div>
          <h3>Éducation & Apprentissage</h3>
          <p>Bibliothèques communautaires, ateliers de lecture, formations numériques et linguistiques pour éveiller les savoirs.</p>
        </div>
      </div>

      {/* Pôle 2 */}
      <div className="service-card">
        <div className="service-img" style={{backgroundImage: 'url("/img/service3.jpg")'}}></div>
        <div className="service-content">
          <div className="service-icon"><i className="fas fa-heartbeat"></i></div>
          <h3>Santé & Bien-être</h3>
          <p>Sensibilisation sanitaire, conseils en nutrition, promotion de l'hygiène et activités sportives pour un corps sain.</p>
        </div>
      </div>

      {/* Pôle 3 */}
      <div className="service-card">
        <div className="service-img" style={{backgroundImage: 'url("/img/service1.jpg")'}}></div>
        <div className="service-content">
          <div className="service-icon"><i className="fas fa-hands-helping"></i></div>
          <h3>Coaching & Accompagnement</h3>
          <p>Développement personnel, suivi psychologique et encadrement familial pour aider chacun à révéler son potentiel.</p>
        </div>
      </div>

      {/* Pôle 4 */}
      <div className="service-card">
        <div className="service-img" style={{backgroundImage: 'url("/img/service4.jpg")'}}></div>
        <div className="service-content">
          <div className="service-icon"><i className="fas fa-seedling"></i></div>
          <h3>Agronomie & Autonomisation</h3>
          <p>Production agricole durable, formations professionnelles et activités génératrices de revenus pour une autonomie solide.</p>
        </div>
      </div>
    </div>
  </div>
</section>


<section id="timeline" className="programs-section bg-light">
  <div className="container">
    <div className="section-header">
      <span className="section-subtitle">CE QUE NOUS FAISONS</span>
      <h2 className="section-title">Programmes & Activités</h2>
      <p className="section-description">
        Des actions concrètes et durables, pensées pour répondre aux besoins réels des communautés que nous servons.
      </p>
    </div>

    <div className="programs-grid">
      {/* Programme 1 */}
      <div className="program-card">
        <div className="card-icon-box">
          <i className="fas fa-book-open"></i>
        </div>
        <h3>Bibliothèques & Ateliers Éducatifs</h3>
        <p>Espaces de lecture, clubs de devoirs et ateliers créatifs pour stimuler la curiosité intellectuelle des enfants et des jeunes.</p>
      </div>

      {/* Programme 2 */}
      <div className="program-card">
        <div className="card-icon-box">
          <i className="fas fa-hand-holding-heart"></i>
        </div>
        <h3>Santé Communautaire & Nutrition</h3>
        <p>Campagnes de sensibilisation, dépistages, ateliers de nutrition et programmes d'hygiène pour améliorer la santé au quotidien.</p>
      </div>

      {/* Programme 3 */}
      <div className="program-card">
        <div className="card-icon-box">
          <i className="fas fa-seedling"></i>
        </div>
        <h3>Agriculture Durable & Formation</h3>
        <p>Initiation aux techniques agroécologiques, jardins communautaires et formations pratiques pour une production alimentaire responsable.</p>
      </div>

      {/* Programme 4 */}
      <div className="program-card">
        <div className="card-icon-box">
          <i className="fas fa-hands-helping"></i>
        </div>
        <h3>Soutien Psychosocial & Familial</h3>
        <p>Accompagnement individuel, groupes de parole et médiation familiale pour renforcer les liens et la résilience émotionnelle.</p>
      </div>

      {/* Programme 5 */}
      <div className="program-card">
        <div className="card-icon-box">
          <i className="fas fa-users"></i>
        </div>
        <h3>Autonomisation des Femmes & des Jeunes</h3>
        <p>Formation à l'entrepreneuriat, micro-crédits et mentorat pour favoriser l'indépendance économique et sociale.</p>
      </div>

      {/* Programme 6 */}
      <div className="program-card">
        <div className="card-icon-box">
          <i className="fas fa-globe-africa"></i>
        </div>
        <h3>Culture, Sport & Vivre-Ensemble</h3>
        <p>Rencontres interculturelles, activités sportives et événements communautaires pour promouvoir la paix et la cohésion.</p>
      </div>
    </div>
  </div>
</section>
 
{/* <section className="budget-section bg-light">
  <div className="container">
    <div className="section-header">
      <span className="section-subtitle">TRANSPARENCE</span>
      <h2 className="section-title">Budget Prévisionnel</h2>
      <p className="section-description">Répartition estimative pour la création et le fonctionnement du centre (Total : 118M FCFA).</p>
    </div>

    <div className="budget-container">
      <div className="budget-grid">
        <div className="budget-item">
          <div className="budget-label">Infrastructures & Site</div>
          <div className="budget-bar-container">
            <div className="budget-bar" style={{width: '55%', backgroundColor: '#2F9E44'}}></div>
            <span>65 000 000 FCFA</span>
          </div>
        </div>
        <div className="budget-item">
          <div className="budget-label">Fonctionnement (3 ans)</div>
          <div className="budget-bar-container">
            <div className="budget-bar" style={{width: '17%', backgroundColor: '#003F5C'}}></div>
            <span>20 000 000 FCFA</span>
          </div>
        </div>
        <div className="budget-item">
          <div className="budget-label">Activités & Terrain</div>
          <div className="budget-bar-container">
            <div className="budget-bar" style={{width: '13%', backgroundColor: '#FFB84D'}}></div>
            <span>15 000 000 FCFA</span>
          </div>
        </div>
        <div className="budget-item">
          <div className="budget-label">Équipements & Divers</div>
          <div className="budget-bar-container">
            <div className="budget-bar" style={{width: '15%', backgroundColor: '#6c757d'}}></div>
            <span>18 000 000 FCFA</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section> */}

<section className="roadmap-section">
  <div className="container">
    <div className="section-header">
      <span className="section-subtitle">NOTRE PARCOURS</span>
      <h2 className="section-title">Chronogramme sur 3 ans</h2>
    </div>

    <div className="timeline-container">
      {/* Phase 1 */}
      <div className="timeline-block">
        <div className="timeline-dot">1</div>
        <div className="timeline-content">
          <h3>Phase 1 (0 – 6 mois)</h3>
          <ul>
            <li>Formalisation juridique du projet</li>
            <li>Mobilisation des premiers partenaires</li>
            <li>Lancement de la présence digitale</li>
          </ul>
        </div>
      </div>

      {/* Phase 2 */}
      <div className="timeline-block">
        <div className="timeline-dot">2</div>
        <div className="timeline-content">
          <h3>Phase 2 (6 – 18 mois)</h3>
          <ul>
            <li>Déploiement des programmes éducatifs</li>
            <li>Organisation d’activités communautaires</li>
            <li>Acquisition progressive du matériel</li>
          </ul>
        </div>
      </div>

      {/* Phase 3 */}
      <div className="timeline-block">
        <div className="timeline-dot">3</div>
        <div className="timeline-content">
          <h3>Phase 3 (18 – 36 mois)</h3>
          <ul>
            <li>Acquisition du site de 10 hectares</li>
            <li>Construction des infrastructures majeures</li>
            <li>Lancement des pôles agricoles et sanitaires</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="impact" className="impact-section">
  <div className="impact-overlay-circles"></div>
  
  <div className="container">
    <div className="section-header white-text">
      <span className="section-subtitle gold">NOS RÉSULTATS CONCRETS</span>
      <h2 className="section-title white">L'impact de nos actions</h2>
      <p className="section-description">
        Chaque chiffre représente des vies transformées, des compétences acquises et des communautés renforcées.
      </p>
    </div>

    <div className="impact-grid">
      <div className="impact-card">
        <i className="fas fa-users"></i>
        {/* <h3><Counter end={25} />+</h3> */}
        <h3>Début d'activités</h3>
        <p>Enfants, jeunes et familles accompagnés</p>
      </div>

      <div className="impact-card">
        <i className="fas fa-calendar-check"></i>
        {/* <h3><Counter end={12} />+</h3> */}
        <h3>Début d'activités</h3>
        <p>Ateliers et formations organisés</p>
      </div>

      <div className="impact-card">
        <i className="fas fa-globe"></i>
        {/* <h3><Counter end={15} /></h3> */}
        <h3>Début d'activités</h3>
        <p>Communautés locales touchées</p>
      </div>

      <div className="impact-card">
        <i className="fas fa-chalkboard-teacher"></i>
        {/* <h3><Counter end={10} />+</h3> */}
        <h3>Début d'activités</h3>
        <p>Éducateurs et formateurs mobilisés</p>
      </div>
    </div>
  </div>
</section>


<section id="contact" className="contact-section">
  <div className="container">
    <div className="section-header">
      <span className="section-subtitle">PARLONS ENSEMBLE</span>
      <h2 className="section-title">Contactez-nous</h2>
      <p className="section-description">
        Une question, une idée de partenariat ou envie de contribuer ? Notre équipe est à votre écoute.
      </p>
    </div>

    <div className="contact-wrapper">
      {/* Colonne Gauche : Image et texte d'introduction */}
      <div className="contact-info-left">
        <div className="contact-image-box">
          <img src="/img/contact-office.jpg" alt="Bureau Sèwèdo" />
        </div>
        <p className="contact-intro-text">
          Que vous soyez un particulier, une association ou une organisation, nous serions ravis d'échanger avec vous. Ensemble, nous pouvons avoir un impact plus fort et plus durable.
        </p>
      </div>

      {/* Colonne Droite : Liste des coordonnées */}
      <div className="contact-details-list">
        <div className="contact-item">
          <div className="contact-item-icon"><i className="fas fa-map-marker-alt"></i></div>
          <span>05 BP 1151 Cotonou, Bénin</span>
        </div>

        <div className="contact-item">
          <div className="contact-item-icon"><i className="fas fa-phone-alt"></i></div>
          <span> +229 52 13 02 18 / +229 42 82 02 18</span>
        </div>

        <div className="contact-item">
          <div className="contact-item-icon"><i className="fas fa-envelope"></i></div>
          <span> centresewedo@gmail.com</span>
        </div>

        <div className="contact-item whatsapp">
          <div className="contact-item-icon"><i className="fab fa-whatsapp"></i></div>
          <span>Écrivez-nous sur WhatsApp</span>
        </div>

        {/* Réseaux Sociaux */}
        <div className="contact-socials">
          <a href="https://wa.me/22952130218" target="_blank" rel="noopener noreferrer" className="social-link">
  <i className="fab fa-whatsapp"></i>
</a>
          <a href="https://t.me/+22952130218" target="_blank" rel="noopener noreferrer" className="social-link">
  <i className="fab fa-telegram-plane"></i>
  
</a>
<a href="https://www.tiktok.com/@centresewedo" target="_blank" rel="noopener noreferrer" className="social-link">
  <i className="fab fa-tiktok"></i>
</a>
<a href="mailto:centresewedo@gmail.com" className="social-link">
  <i className="fas fa-envelope"></i>
</a>

</div>
      </div>
    </div>
  </div>
</section>




 <a href="#top" className="back-to-top" aria-label="Retour en haut">
        <i className="fa-solid fa-circle-arrow-up"></i>
      </a>

    
      </main>

      {/* Affichage du Pied de page */}
      <Footer />
    </div>
  );
}