import Button from './components/Button'
import Navbar from './components/Navbar'
import imgWoman from './assets/oxyty_woman.png'

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
          {/* component button */}
          <Button text="INSCRIVEZ-VOUS !" />
        </div>

        <div className="banner__right">
          <img src={imgWoman} alt="Image woman fighter" />
        </div>
      </div>
    </div>
  )
}

export default App
