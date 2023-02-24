import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {addPost, RootStateType, updateNewPost} from "./redux/state";



export let rerenderEntireTree=(state:RootStateType)=>{ReactDOM.render(
    <BrowserRouter>
        <App state={state} addPost={addPost} updateNewPost={updateNewPost}/>
    </BrowserRouter>,
    document.getElementById('root')
);}