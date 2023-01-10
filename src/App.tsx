import React from 'react';
import './App.css';
import {Header} from "./components/Header";
import {NabBar} from "./components/NabBar";
import {Profile} from "./components/Profile";

function App() {
    return (
        <div className="app-wrapper">
            <Header/>
            <NabBar/>
            <Profile/>
        </div>
    );
}

export default App;
