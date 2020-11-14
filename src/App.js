import './App.css';
import React , {useEffect} from 'react';

import {startAnimation} from "./main";

function App() {
   const d=useEffect(function () {
       startAnimation()
   });
    return (
        <div id="container" className="gutter">
            <div id="cloud1">
                <img src="./images/cloud.png"/>

            </div>
            <div id="cloud2">
                <img src="images/cloud.png"/>
            </div>
            <img id="bird-herd" src="images/beak_bird-multiple.gif"/>
            <div id="bird-predater">
                <img src="images/beak_bird.gif"/>
            </div>

            <div id="tree">
                <img src="images/tree.gif"/>


            </div>
            <div id="rock">
                <img src="images/rock3.png"/>


            </div>

            <div id="wolf-predater">
                <img id="image_wolf" src="images/wolf_reverse.gif"/>

            </div>

            <div id="tabbit">
                <img src="images/rabbit.gif"/>

            </div>

            <footer>
                <img src="images/earth_track.jpg"/>
            </footer>
        </div>
    );
}

export default App;
