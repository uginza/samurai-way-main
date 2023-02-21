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
import {MyPostType} from "./components/Profile/MyPosts/Post/MyPost";
import {DialogItemPropsType} from "./components/Dialogs/DialogItem/DialogItem";
import {MessagePropsType} from "./components/Dialogs/Message/Message";



type AppPropsType = {
    myPosts: Array<MyPostType>
    dialogs:Array<DialogItemPropsType>
    messages:Array<MessagePropsType>
}

function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className="appWrapper">
                <Header/>
                <NavBar/>
                <div className="appWrapperContnent">
                    <Route path="/profile" render={()=><Profile myPosts={props.myPosts}/>}/>
                    <Route path="/dialogs" render={()=><Dialogs dialogs={props.dialogs} messages={props.messages}/>}/>
                    <Route path="/news" render={()=><News/>}/>
                    <Route path="/feed" render={()=><Feed/>}/>
                    <Route path="/music" render={()=><Music/>}/>
                    <Route path="/settings" render={()=><Settings/>}/>

                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
