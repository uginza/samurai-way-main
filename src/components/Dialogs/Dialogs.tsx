import React from "react";
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {dialogsPageType} from "../../redux/state";


type DialogsPropsType={
    dialogsPage:dialogsPageType
}


export function Dialogs(props:DialogsPropsType) {

   let dialogsElements=props.dialogsPage.dialogs.map(d=><DialogItem name={d.name} id={d.id} />)
    let messagesElements=props.dialogsPage.messages.map(m=><Message message={m.message} id={m.id} />)

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