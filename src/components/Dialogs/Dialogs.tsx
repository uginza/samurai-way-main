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
    const dialogData=[
        {id:1, name:"Valera"},
        {id:2, name:"Katya"},
        {id:3, name:"Kamilla"},
        {id:4, name:"Lucreciy"}
    ]
 const MessageData=[
        {id:1, message:"Hi"},
        {id:2, message:"Yo"},
        {id:3, message:"How are you"},
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <DialogItem name={dialogData[0].name} id={dialogData[0].id} />
                <DialogItem name={dialogData[1].name} id={dialogData[1].id} />
                <DialogItem name={dialogData[2].name} id={dialogData[2].id} />
                <DialogItem name={dialogData[3].name} id={dialogData[3].id} />
            </div>
            <div className={s.messages}>
                <Message message={MessageData[0].message} id={dialogData[0].id} />
                <Message message={MessageData[1].message} id={dialogData[0].id} />
                <Message message={MessageData[2].message} id={dialogData[0].id} />
            </div>
        </div>
    );
}