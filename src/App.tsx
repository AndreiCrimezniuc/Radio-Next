import React from 'react';
import './App.css';
import {RadioContainer} from "./component/radio-container/radio-container";


function App() {
    return (
        <div>
            {/*<AudioPlayer tracks={tracks}  />*/}
            { <RadioContainer />}
        </div>
    );
}

export default App;
