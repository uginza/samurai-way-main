import React from 'react';
import './index.css';
import {RootStateType, store, StoreType} from "./redux/store";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";




let rerenderEntireTree=(state:RootStateType)=>{ReactDOM.render(
    <BrowserRouter>
        <App state={state} dispatch={store.dispatch.bind(store)} store={store}/>
    </BrowserRouter>,
    document.getElementById('root')
);}

rerenderEntireTree(store.getState())
store.subscribe(()=>{
   let state=store.getState()
    rerenderEntireTree(state);
})



