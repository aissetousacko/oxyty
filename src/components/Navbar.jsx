import logo from '../assets/oxyty_logo.png'

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="Logo Oxyty" />

      <ul className="navbar__list">
        <li className="navbar__items">LE CLUB</li>
        <li className="navbar__items">ACTIVITÉS</li>
        <li className="navbar__items">COACHING SANTÉ</li>
        <li className="navbar__items">STUDIO 1200" EMS</li>
        <li className="navbar__items">ENTREPRISES</li>
        <li className="navbar__items">CONNEXION</li>
      </ul>
      <span className="navbar__subscribe">S'INSCRIRE</span>
    </div>
  )
}

export default Navbar
