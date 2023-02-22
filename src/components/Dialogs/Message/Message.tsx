import s from "../Dialogs.module.css";
import React from "react";
import {MessageType} from "../../../redux/state";



export function Message(props: MessageType) {
    return <div className={s.message}>{props.message}</div>
}