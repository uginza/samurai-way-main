import s from "../Dialogs.module.css";
import React from "react";

export type MessagePropsType = {
    id: number,
    message: string
}

export function Message(props: MessagePropsType) {
    return <div className={s.message}>{props.message}</div>
}