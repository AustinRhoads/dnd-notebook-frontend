import cuid from 'cuid';
import React, { useEffect} from 'react';
import './Character.css'

const CharacterInput = ({classes}) => {

    

   // const [selectedClass, setSelectedClass] = useState([])

    function selectClass(){
     
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
        <div id="character-input">
            {renderClasses(classes)}

        </div>
    )
}

export default CharacterInput;