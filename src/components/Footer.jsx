import React from 'react'
import iconeFb from '../assets/icone_facebook.png'
import iconeInsta from '../assets/icone_insta.png'

const Footer = () => {
  return (
    <div className="footer">
      <ul className="footer__list">
        <li className="footer__item">LE CLUB</li>
        <li className="footer__item">ACTIVITÉS</li>
        <li className="footer__item">STUDIO 1200" EMS</li>
      </ul>
      <ul className="footer__list">
        <li className="footer__item">COACHING SANTÉ</li>
        <li className="footer__item">ESPACE MEMBRE</li>
        <li className="footer__item">ACTUALITÉS</li>
      </ul>
      <ul className="footer__list">
        <li className="footer__item">MENTIONS LÉGALES</li>
        <li className="footer__item">CHARTE QUALITÉ</li>
        <li className="footer__item">CONDITIONS GÉNÉRALES DE VENTE</li>
      </ul>

      <div className="footer__social">
        <p>SUIVEZ-NOUS SUR LES RÉSEAUX</p>
        <div className="footer__icons">
          <img src={iconeFb} alt="Icône Facebook" />
          <img src={iconeInsta} alt="Icône Instagram" />
        </div>
      </div>
    </div>
  )
}

export default Footer
