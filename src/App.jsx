import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { points, equip, buy, setReactClicked, setViteClicked,Poisson , apparition,ach} from "./Fonctions.ts"
let viteClicked;
  let setViteClicked2 ;
let reactClicked;
  let setReactClicked2;

function App() {
  const [count, setCount] = useState(0);
  const [annoyingPopup, setAnnoyingPopup] = useState(false);
  const [showAchievementsPopup, setShowAchievementsPopup] = useState(false);
  [viteClicked, setViteClicked2] = useState(false);
  [reactClicked, setReactClicked2] = useState(false);
  const [showRulesPopup, setShowRulesPopup] = useState(true);

  return (
    <>
      {showRulesPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h2>Règles du Jeu</h2>
            <p>Bienvenue ! Il faut collecter du poisson pour gagner des points!</p>
            <button onClick={() => setShowRulesPopup(false)}>Fermer</button>
          </div>
        </div>
      )}

      <div>
        <a
          href="https://vite.dev"
          target="_blank"
          onClick={() => setViteClicked2(true)}
        >
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a
          href="https://react.dev"
          target="_blank"
          onClick={() => setReactClicked2(true)}
        >
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <div>
        <img id="bateau" src="/src/assets/Photo/Bateau/bateau.png" alt="Bateau" />
      
        <img id="object" src='/src/assets/Photo/Poison/Poisson.png'>
        </img>
      </div>
      
      <div className="card">
  <img
    id='click_button'
    src='/src/assets/Photo/CannePeche/canneBasique.png'
    onClick={() => {
      const [x, y] = points();
      boutonArgent(x);
      setCount(count + x);
      Poisson(y);
      if (count % 200 === 0) {
        apparition();
      }
    }}
    style={{ pointerEvents: "all" }}
  />
  <button onClick={() => setAnnoyingPopup(true)}>
    {count} Money
  </button>
</div>

{annoyingPopup && (
  <div className="popup-overlay">
    <div className="popup-content">
      <h2>Money</h2>
      <ul>
        <li>{money} Money</li>
      </ul>
      <button onClick={() => setAnnoyingPopup(false)}>Fermer</button>
    </div>
  </div>
)}



      <h1>Achievements</h1>
      <div className="card">
        {/*<button onClick={() => setShowPopup(true)}>Afficher les missions</button>*/}
        <button onClick={() => setShowAchievementsPopup(true)}>
          Afficher les achievements
        </button>
      </div>

      {/*{showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h2>Liste des Missions</h2>
            <ul>
              <li>Mission 1</li>
            </ul>
            <button onClick={() => setShowPopup(false)}>Fermer</button>
          </div>
        </div>
      )}*/}

      {showAchievementsPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h2>Liste des achievements</h2>
            <ul>
              { achievements()}
            </ul>
            <button onClick={() => setShowAchievementsPopup(false)}>Fermer</button>
          </div>
        </div>
      )}

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

function inventory() {
  return (
      <div style={{padding: "20px", fontFamily: "Arial, sans-sherif"}}>
          <h1>Inventaire</h1>
          {inventory.length===0 ? (
              <p>Aucun objet dans l'inventaire.</p>
          ) : (
              <ul>
                  {inventory.map((item, index) => (
                      <li key={index}>{item}</li>
                  ))}
              </ul>
          )}
      </div>
  );
}

function missions() {
  return (
      <div style={{padding: "20px", fontFamily: "Arial, sans-sherif"}}>
          <h1>Missions</h1>
              <ul>
                  {missions.map((mission) => (
                      <li>mission</li>
                  ))}
              </ul>
      </div>
  );
}

function achievements() {
  let achievementss = ach();
  return (
    <div style={{ padding: "10px", fontFamily: "Arial, sans-serif" }}>
      <ul>
        {achievementss.map((achievement, index) => (
          <li key={index}>
            {achievement.num}. {achievement.desc} ({achievement.obj ? 'True' : 'False'})
          </li>
        ))}
      </ul>
    </div>
  );
}

function boutonArgent(x) { 
  return (
      <div className="popup-overlay">
        <div className="popup-content">
          <h3>{x}</h3>
        </div>
      </div>
  )
}

export default App;

