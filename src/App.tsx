import React from 'react';
import './App.css';
import {getStationById} from "./repository/station/stationRepository";
import {Station} from "./model/station";
import {RadioBox} from "./component/radiobox/radiobox";

function App() {
    return (
        <div>
           <RadioBox />
        </div>
    );
}

export default App;
