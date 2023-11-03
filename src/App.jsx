import Button from './components/Button'
import Navbar from './components/Navbar'
import imgWoman from './assets/oxyty_woman.png'
import arrowRight from './assets/arrow-right.png'

function App() {
  return (
    <div>
      <Navbar />
      <div className="banner">
        <div className="banner__left">
          <h1>EN 2023, FINI LES EXCUSES !</h1>
          <h2>FRAIS D’INSCRIPTIONS OFFERTS !</h2>
          <p>
            Rejoignez dès maintenant l’aventure et découvrez l’ambiance
            familiale et conviviable qui vous attend !
          </p>
          <Button text="INSCRIVEZ-VOUS !" />
        </div>

        <div className="banner__right">
          <img src={imgWoman} alt="Image woman fighter" />
        </div>
      </div>

      <div className="discount">
        <div className="discount__card">
          <p className="discount__label">NOUVEAU</p>
          <p className="discount__title">STUDIO 1200" EMS</p>
          <p className="discount__text">
            Découvrez la nouvelle technologie qui permet de muscler votre corps
            plus rapidement !
          </p>
          <p className="discount__button">
            EN SAVOIR PLUS <img src={arrowRight} alt="Icône" />
          </p>
        </div>

        <div className="discount__card">
          <p className="discount__label">JANVIER 2023</p>
          <p className="discount__title discount__title--card2">
            OFFRE EXEPTIONELLE DE BIENVENUE
          </p>
          <p className="discount__button">
            VOIR L'OFFRE <img src={arrowRight} alt="Icône" />
          </p>
        </div>

        <div className="discount__card">
          <p className="discount__label">RESTONS CONNECTÉS</p>
          <p className="discount__title discount__title--card3">
            GARDONS LE LIEN ET RDV SUR NOS RÉSEAUX SOCIAUX
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
