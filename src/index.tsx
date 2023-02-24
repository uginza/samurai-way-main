import React from 'react';
import './index.css';
import {state, subscribe} from "./redux/state";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {addPost, updateNewPost} from "./redux/state";



let rerenderEntireTree=()=>{ReactDOM.render(
    <BrowserRouter>
        <App state={state} addPost={addPost} updateNewPost={updateNewPost}/>
    </BrowserRouter>,
    document.getElementById('root')
);}

rerenderEntireTree()
subscribe(rerenderEntireTree)



