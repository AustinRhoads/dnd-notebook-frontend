import React from 'react'
import notebook from '../images/red_notebook.png'


const Home = () => {

    return (
        <div id="home-section">
            <img id="notebook-img" alt="" src={notebook} />
            <div id="home-start-link">GET STARTED</div>
        </div>
    )
};

export default Home;