import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

type DialogItemPropsType={
    id:number,
    name:string
}

function DialogItem(props:DialogItemPropsType){
    return <div className={s.dialog}>
        <NavLink to={'/dialogs/'+props.id}>{props.name}</NavLink>
    </div>
}

type MessagePropsType={
    id:number,
    message:string
}

function Message(props:MessagePropsType){
  return  <div className={s.message}>{props.message}</div>
}

export function Dialogs() {
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

   let dialogsElements=dialogs.map(d=><DialogItem name={d.name} id={d.id} />)
    let messagesElements=messages.map(m=><Message message={m.message} id={m.id} />)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
}