import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/NavBar/NavBar";
import {Profile} from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Feed} from "./components/Feed/Feed";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {Users} from "./components/Users/Users";

/*type AppPropsType={
    state:RootStateType
    addPost:(postMessage:string)=>void
    updateNewPost:(newPostText:string)=>void
}*/

/*type AppPropsType= {
    state:RootStateType
    dispatch: (action: ActionType) => void
    store:StoreType
}*/

function App(/*props:AppPropsType*/) {
    return (
            <div className="appWrapper">
                <Header/>
                <NavBar/>
                <div className="appWrapperContnent">
                    <Route path="/profile" render={() => <Profile
                    />
                    }/>
                    <Route path="/dialogs" render={() => <DialogsContainer
                        />}/>
                    <Route path="/news" render={() => <News/>}/>
                    <Route path="/feed" render={() => <Feed/>}/>
                    <Route path="/music" render={() => <Music/>}/>
                    <Route path="/settings" render={() => <Settings/>}/>
                    <Route path="/users" render={() => <Users/>}/>

                </div>
            </div>
    );
}

export default App;
