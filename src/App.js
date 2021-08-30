import React, { useState, useEffect } from 'react';
import './App.css';
import Monsters from './components/monsters';
function App() {

  const [monsters, setMonsters] = useState([])
  useEffect( () => {
    fetch('https://www.dnd5eapi.co/api/monsters').then(resp => resp.json()).then(obj => setMonsters(obj.results))
  })
  return (
    <div className="App">
      <Monsters monsters={monsters}/>
    </div>
  );
}

export default App;
