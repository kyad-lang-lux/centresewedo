import React from 'react';
import "../src/style.css"; // Importation directe du style depuis le dossier parent

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="container footer-content">
        <p className="copyright">
          © 2026 Centre Sèwèdo. Tous droits réservés.
        </p>
        
        
      </div>
    </footer>
  );
}