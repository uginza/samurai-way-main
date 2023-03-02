import React, {ChangeEvent, useRef} from "react";
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {
    DialogItemType,
    MessageType
} from "../../redux/store";



type DialogsPropsType={
    addMes:()=>void
    onMessageChange:(e:ChangeEvent<HTMLTextAreaElement>)=>void
    newMessageText:string
    dialogs:Array<MessageType>
    dialogsPage:Array<DialogItemType>

}


export function Dialogs(props:DialogsPropsType) {

   let dialogsElements=props.dialogsPage.map(d=><DialogItem name={d.name} id={d.id} />)
    let messagesElements=props.dialogs.map(m=><Message message={m.message} id={m.id} />)

    let newMesEl = useRef<HTMLTextAreaElement>(null)


    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <textarea ref={newMesEl}
                          onChange={props.onMessageChange}
                          value={props.newMessageText}
                          placeholder={"Enter your message"}>

                </textarea>
                <button onClick={props.addMes}>Add</button>
            </div>
        </div>
    );
}