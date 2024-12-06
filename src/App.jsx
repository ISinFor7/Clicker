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
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <img id='click_button' src='/src/assets/Photo/CannePeche/canneBasique.png' onClick={() => setCount((count) => count + 1)} style={{"pointer-events": "all"}} />
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
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
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App