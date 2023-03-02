import React from 'react';
import './index.css';
import {RootStateType, store, StoreType} from "./redux/store";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {StoreContext} from "./StoreContext";


let rerenderEntireTree=(state:RootStateType)=>{ReactDOM.render(
    <BrowserRouter>
        <StoreContext.Provider value={store}>
        <App/>
        </StoreContext.Provider>
    </BrowserRouter>
,
    document.getElementById('root')
);}

rerenderEntireTree(store.getState())
store.subscribe(()=>{
   let state=store.getState()
    rerenderEntireTree(state);
})



