import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const myPosts=[
    {id:1,value:"Hi.How are you",likeCount:35},
    {id:2,value:"Putin put out",likeCount:335}
]

const dialogs=[
    {id:1, name:"Valera"},
    {id:2, name:"Katya"},
    {id:3, name:"Kamilla"},
    {id:4, name:"Lucreciy"}
]

const messages=[
    {id:1, message:"Hi"},
    {id:2, message:"Yo"},
    {id:3, message:"How are you"},
]

ReactDOM.render(
    <App messages={messages} dialogs={dialogs} myPosts={myPosts}/>,
  document.getElementById('root')
);