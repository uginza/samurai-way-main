import React, {useRef} from "react";
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {
    ActionType,
    dialogsPageType,
} from "../../redux/store";
import {addMessageActionCreater, updateNewMessageTextActionCreater} from "../../redux/dialogsReducer";


type DialogsPropsType={
    dialogsPage:dialogsPageType
    dispatch:(action: ActionType)=>void
}


export function Dialogs(props:DialogsPropsType) {

   let dialogsElements=props.dialogsPage.dialogs.map(d=><DialogItem name={d.name} id={d.id} />)
    let messagesElements=props.dialogsPage.messages.map(m=><Message message={m.message} id={m.id} />)

    let newMesEl = useRef<HTMLTextAreaElement>(null)

    const addMes = () => {
       props.dispatch(addMessageActionCreater())
    }

    const onMessageChange = () => {
        if (newMesEl.current !== null) {
            props.dispatch(updateNewMessageTextActionCreater(newMesEl.current.value))
        }
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <textarea ref={newMesEl}
                          onChange={onMessageChange}
                          value={props.dialogsPage.newMessageText} placeholder={"Enter your message"}>

                </textarea>
                <button onClick={addMes}>Add</button>
            </div>
        </div>
    );
}