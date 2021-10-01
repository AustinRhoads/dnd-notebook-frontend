import cuid from 'cuid';
import React, {useState, useEffect} from 'react';
import './Character.css'

const CharacterInput = ({classes}) => {

    const API_URL = "https://www.dnd5eapi.co"

    const [selectedClass, setSelectedClass] = useState([])

    function selectClass(url){
        console.log("hey")
        console.log(url)
       // fetch(API_URL + url).then(resp => resp.json()).then(obj => console.log(obj))
    } 

    useEffect(() => {
       
    })
        
    

    function renderClasses(classes){
        if(classes){
            return(
                <ul>
                    {classes.map(cl => { return <li className="class-list-item" onClick={() => selectClass(cl.url)} key={cuid()}> {cl.name} </li> } ) }
                </ul>
            )
        }
    }

    return(
        <div>
            {renderClasses(classes)}

        </div>
    )
}

export default CharacterInput;