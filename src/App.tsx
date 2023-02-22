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
import {RootStateType} from "./redux/state";

type AppPropsType={
    state:RootStateType
}


function App(props:AppPropsType) {
    return (
        <BrowserRouter>
            <div className="appWrapper">
                <Header/>
                <NavBar/>
                <div className="appWrapperContnent">
                    <Route path="/profile" render={() => <Profile profilePage={props.state.myProfilePage}/>}/>
                    <Route path="/dialogs" render={() => <Dialogs dialogsPage={props.state.dialogsPage}/>}/>
                    <Route path="/news" render={() => <News/>}/>
                    <Route path="/feed" render={() => <Feed/>}/>
                    <Route path="/music" render={() => <Music/>}/>
                    <Route path="/settings" render={() => <Settings/>}/>

                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
