import React, {} from 'react'

const Monsters = ({monsters}) => {
    //console.log(monsters)
    function printMonstersNames(monsters){
        var first50 = monsters.slice(0, 50)
        return(
            <ul>
                {first50.map((mon) => { return <li>{mon.name}</li>})}
            </ul>
        )
    }

    return(
        <div>
            {printMonstersNames(monsters)}
        </div>
    )
};

export default Monsters;