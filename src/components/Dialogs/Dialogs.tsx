import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

type DialogItemPropsType={
    id:string,
    name:string
}

function DialogItem(props:DialogItemPropsType){
    return <div className={s.dialog}>
        <NavLink to={'/dialogs/'+props.id}>{props.name}</NavLink>
    </div>
}

type MessagePropsType={
    message:string
}

function Message(props:MessagePropsType){
  return  <div className={s.message}>{props.message}</div>
}

export function Dialogs() {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <DialogItem name={"Valera"} id={"1"} />
                <DialogItem name={"Katya"} id={"2"} />
                <DialogItem name={"Misha"} id={"3"} />
                <DialogItem name={"Robert"} id={"4"} />
            </div>
            <div className={s.messages}>
                <Message message={'Hi'}/>
                <Message message={'Yo Cmon'}/>
                <Message message={'Yeah'}/>
            </div>
        </div>
    );
}