import React from 'react';
import './App.css';
import {RadioContainer} from "./component/radio-container/radio-container";
import {Header} from "./component/header/header";

function App() {
    return (
        <div className="App">
            <Header/>
            {<RadioContainer/>}
        </div>
    );
}

export default App;
