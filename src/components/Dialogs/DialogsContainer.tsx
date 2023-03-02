import React, {ChangeEvent} from "react";

import {
     StoreType
} from "../../redux/store";
import {addMessageActionCreater, updateNewMessageTextActionCreater} from "../../redux/dialogsReducer";
import {Dialogs} from "./Dialogs";


type DialogsContainerPropsType={
    store:StoreType
}


export function DialogsContainer(props:DialogsContainerPropsType) {
    const addMes = () => {
       props.store.dispatch(addMessageActionCreater())
    }

    const onMessageChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        if (e.currentTarget.value !== null) {
            let action = updateNewMessageTextActionCreater(e.currentTarget.value)
            props.store.dispatch(action)
        }
    }
    return (
       <Dialogs addMes={addMes}
                onMessageChange={onMessageChange}
                dialogs={props.store._state.dialogsPage.messages}
                newMessageText={props.store._state.dialogsPage.newMessageText}
                dialogsPage={props.store._state.dialogsPage.dialogs}
       />
    );
}