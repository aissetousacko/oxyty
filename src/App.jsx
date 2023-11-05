import Button from './components/Button'
import Navbar from './components/Navbar'
import imgWoman from './assets/oxyty_woman.png'
import arrowRight from './assets/arrow-right.png'
import fitnessImg from './assets/cours_fitness.png'
import iconeRun from './assets/icone_run.png'
import iconeUsers from './assets/icone_users.png'
import iconeStar from './assets/icone_star.png'
import iconeLock from './assets/icone_lock.png'
import iconeBox from './assets/icone_box.png'
import coursCollectif from './assets/cours_collectif.png'
import muscu from './assets/muscu.png'
import coaching from './assets/coaching.png'
import premium from './assets/premium.png'
import imgMan from './assets/oxyty_man.png'
import Footer from './components/Footer'

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

      <div className="section1">
        <div className="section1__left">
          <img src={fitnessImg} alt="Cours fitness" />
        </div>

        <div className="section1__right">
          <h1 className="section1__title">VIVEZ LE SPORT 100% LIBERTÉ</h1>
          <h3 className="section1__subtitle">
            Fitness, musculation et remise en forme
          </h3>
          <p className="section1__text">
            Concept novateur de club de fitness Premium, Oxyty Sports Club
            Saint-Ouen-l’Aumône propose un service de proximité à taille humaine
            depuis plus de 5 ans. Sur une surface de 550m2, nous apportons une
            bulle d’oxygène au coeur du parc d’entreprises de
            Saint-Ouen-l’Aumône. Nous dédions notre passion à votre remise en
            forme et à l’atteinte de vos objectifs avec l’accompagnement de nos
            coachs diplômés d’État.
          </p>

          <Button text="DÉCOUVRIR LE CLUB" />
        </div>
      </div>

      <div className="recap">
        <div className="recap__card">
          <img src={iconeRun} alt="Icône course" />
          <h2 className="recap__title">50 COURS</h2>
          <p className="recap__subtitle">100% MOTIVATION</p>
        </div>

        <div className="recap__card">
          <img src={iconeUsers} alt="Icône course" />
          <h2 className="recap__title">6 COACHS</h2>
          <p className="recap__subtitle">100% HUMAIN</p>
        </div>

        <div className="recap__card">
          <img src={iconeStar} alt="Icône course" />
          <h2 className="recap__title">PREMIUM</h2>
          <p className="recap__subtitle">100% QUALITÉ</p>
        </div>

        <div className="recap__card">
          <img src={iconeLock} alt="Icône course" />
          <h2 className="recap__title">
            AVEC ET SANS <br />
            ENGAGEMENT
          </h2>
          <p className="recap__subtitle">100% LIBERTÉ</p>
        </div>

        <div className="recap__card">
          <img src={iconeBox} alt="Icône course" />
          <h2 className="recap__title">
            FORMULES <br />
            ADAPTABLES
          </h2>
          <p className="recap__subtitle">100% SIMPLICITÉ</p>
        </div>
      </div>

      <div className="activities">
        <h1 className="activities__title">ACTIVITÉS</h1>
        <h2 className="activities__subtitle">UNE OFFRE DE SERVICES COMPLÈTE</h2>

        <div className="activities__cards">
          <div className="activities__card">
            <img src={coursCollectif} alt="Image cours collectif" />
            <p className="activities__text">COURS COLLECTIFS</p>
          </div>

          <div className="activities__card">
            <img src={muscu} alt="Image musculation" />
            <p className="activities__text">ESPACE CARDIO MUSCULAIRE</p>
          </div>

          <div className="activities__card">
            <img src={coaching} alt="Image coaching" />
            <p className="activities__text">COACHING SANTÉ</p>
          </div>

          <div className="activities__card">
            <img src={premium} alt="Image serviice premium" />
            <p className="activities__text">SERVICE PREMIUM</p>
          </div>
        </div>
      </div>

      <div className="section2">
        <div className="section2__left">
          <h1 className="section2__title">LE CONCEPT OXYTY</h1>
          <h3 className="section2__subtitle">100% PASSION</h3>
          <p className="section2__text">
            Chez Oxyty Sports Club, nous sommes des passionnés ! Chaque jour,
            vous nous inspirez et nous vous le rendons au maximum. L’envie de
            partager notre passion pour le fitness, de vous voir progresser est
            une source inépuisable qui nous anime au quotidien. Rejoignez le
            mouvement et découvrez notre philosophie !
          </p>

          <Button text="REJOIGNEZ-NOUS !" />
        </div>

        <div className="section2__right">
          <img src={imgMan} alt="Man runner" />
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default App
