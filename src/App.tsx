import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/NavBar/NavBar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Feed} from "./components/Feed/Feed";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {ActionType, RootStateType, StoreType} from "./redux/store";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";

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

                </div>
            </div>
    );
}

export default App;
