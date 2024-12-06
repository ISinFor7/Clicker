import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showPopup, setShowPopup] = useState(false);
  const [showAchievementsPopup, setShowAchievementsPopup] = useState(false);

  return (
    <>
      
      
      <div className="card">
        <img id='click_button' src='/src/assets/Photo/CannePeche/canneBasique.png' onClick={() => setCount((count) => count + 1)} style={{"pointer-events": "all"}} />
        <button onClick={() => setCount((count) => count + 1)}>
          {count} Money
        </button>
      </div>
      <h1> Missions & Achievements  </h1>
      <div className="card">
        <button onClick={() => setShowPopup(true)}>Afficher les missions</button>
        <button onClick={() => setShowAchievementsPopup(true)}>Afficher les achievements</button>
      </div>

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h2>Liste des Missions</h2>
            <ul>
              <li> Mission 1 </li>
            </ul>
            <button onClick={() => setShowPopup(false)}>Fermer</button>
          </div>
        </div>
      )}

      {showAchievementsPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h2>Liste des achievements</h2>
            <ul>
              <li> Achievement 1 </li>
            </ul>
            <button onClick={() => setShowAchievementsPopup(false)}>Fermer</button>
          </div>
        </div>
      )}
      
    </>
  )
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
  return (
      <div style={{padding: "20px", fontFamily: "Arial, sans-sherif"}}>
          <h1>Achievements</h1>
              <ul>
                  {achievements.map((achievement) => (
                      <li>achievement</li>
                  ))}
              </ul>
      </div>
  );
}

export default App