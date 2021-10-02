import React, { useState, useEffect } from 'react';
import './App.css';
//import Monsters from './components/monsters/monsters';
import CharacterInput from './components/characters/CharacterInput'
import Home from './components/Home.js'




function App() {

  

  //const [monsters, setMonsters] = useState([])
  const [classes, setClasses] = useState([])
  const [races, setRaces] = useState([])


  useEffect( () => {
    //fetch('https://www.dnd5eapi.co/api/monsters').then(resp => resp.json()).then(obj => setMonsters(obj.results));
    const CLASSES_URL = "https://api.open5e.com/classes/"
    const RACES_URL = "https://api.open5e.com/races/"
    
 
      const fetchClassList = async () => {
        try{
          const classes_resp = await fetch(CLASSES_URL);
          const classes_json = await classes_resp.json();
          const classes_list = classes_json.results;
          console.log(classes_list)
          setClasses(classes_list)
        } catch (error){
          console.log("error: ", error)
        }
      }

      const fetchRacesList = async () => {
        try{
          const races_resp = await fetch(RACES_URL);
          const races_json = await races_resp.json();
          const races_list = races_json.results;
          console.log(races_list)
          setRaces(races_list)
        } catch (error){
          console.log("error: ", error)
        }
      }
    
    
      fetchClassList()
      fetchRacesList()

  }, [])



  return (
    <div className="App">
     <Home />
      {/*<Monsters monsters={monsters}/>*/}
      <CharacterInput classes={classes} races={races} />
    </div>
  );
}

export default App;
