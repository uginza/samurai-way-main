import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/NavBar/NavBar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Feed} from "./components/Feed/Feed";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";

function App() {
    return (
        <BrowserRouter>
            <div className="appWrapper">
                <Header/>
                <NavBar/>
                <div className="appWrapperContnent">
                    <Route path="/profile" component={Profile}/>
                    <Route path="/dialogs" component={Dialogs}/>
                    <Route path="/news" component={News}/>
                    <Route path="/feed" component={Feed}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/settings" component={Settings}/>

                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
