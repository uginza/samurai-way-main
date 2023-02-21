import React from "react";
import s from './Dialogs.module.css';
import {DialogItem, DialogItemPropsType} from "./DialogItem/DialogItem";
import {Message, MessagePropsType} from "./Message/Message";

type DialogsPropsType={
    dialogs:Array<DialogItemPropsType>
    messages:Array<MessagePropsType>
}



export function Dialogs(props:DialogsPropsType) {

   let dialogsElements=props.dialogs.map(d=><DialogItem name={d.name} id={d.id} />)
    let messagesElements=props.messages.map(m=><Message message={m.message} id={m.id} />)

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