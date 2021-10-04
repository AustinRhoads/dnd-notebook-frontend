import React, { useState, useEffect } from 'react';
import './App.css';
//import Monsters from './components/monsters/monsters';
import CharacterInput from './components/characters/CharacterInput'
import Home from './components/Home.js'




function App() {

  

  //const [monsters, setMonsters] = useState([])
  const [classes, setClasses] = useState([])
  const [races, setRaces] = useState([])
  const [monsters, setMonsters] = useState([])
  const [weapons, setWeapons] = useState([])


  useEffect( () => {
    //fetch('https://www.dnd5eapi.co/api/monsters').then(resp => resp.json()).then(obj => setMonsters(obj.results));
    const CLASSES_URL = "https://api.open5e.com/classes/";
    const RACES_URL = "https://api.open5e.com/races/";
    const MONSTERS_URL = "https://api.open5e.com/monsters";
    const WEAPONS_URL = "https://api.open5e.com/weapons/";
    const BACKGROUNDS_URL = "https://api.open5e.com/backgrounds/";
    const FEATS_URL = "https://api.open5e.com/feats/";
    const CONDITIONS_URL = "https://api.open5e.com/conditions/";
    const MAGICITEMS_URL =  "https://api.open5e.com/magicitems/";
    const SPELLS_URL = "https://api.open5e.com/spells/";
    
 
      const fetchClassList = async () => {
        try{
          const classes_resp = await fetch(CLASSES_URL);
          const classes_json = await classes_resp.json();
          const classes_list = classes_json.results;
          /*console.log(classes_list)*/
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
          setRaces(races_list)
        } catch (error){
          console.log("error: ", error)
        }
      }

      const fetchMonsters = async () => {
        const monsters_resp = await fetch(MONSTERS_URL+'/?limit=2000');
        const monsters_json = await monsters_resp.json();
        const monsters_list = monsters_json.results;
        setMonsters(monsters_list)
      
     //   var allKeys = {}

     //   for(let x = 0; x < monsters_list.length; x++){
//
     //    var keys = Object.keys(monsters_list[x]);
//
     //       for(let i = 0; i < keys.length; i++){
     //           if(!allKeys[keys[i]]){
     //             allKeys[keys[i]] = [ typeof monsters_list[x][keys[i]], monsters_list[x][keys[i]]] //[typeof monsters_list[x].keys[i], monsters_list[x].keys[i]]
     //           }
     //       }
     //   }
//
     //   console.log(allKeys)
      }

      const fetchWeapons = async () => {
        const weapons_fetch = await fetch(WEAPONS_URL+'?limit=2000');
        const weapons_json = await weapons_fetch.json();
        const weapons_list = weapons_json.results;
        setWeapons(weapons_list)

        var weaponsProperties = [];
        var allProps = new Set();
        for(let x = 0; x < weapons_list.length; x++ ){
          var keys = Object.keys(weapons_list[x]);

          for(let i = 0; i < keys.length; i++){
            if(keys[i] === "properties"){
              weaponsProperties.push({[weapons_list[x].name]: weapons_list[x][keys[i]]})
              var propsy = weapons_list[x][keys[i]] || []
              
              for(let j = 0; j <  propsy.length; j++){
                if(!allProps.has(propsy[j])){
                  allProps.add(propsy[j])
                }
              }
            }
          }


        }
        console.log(allProps)
        console.log(weaponsProperties)
      }
    
    
      fetchClassList()
      fetchRacesList()
      fetchMonsters()
      fetchWeapons()
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
