import React, {ChangeEvent} from "react";

import {
    ActionType,
    RootStateType
} from "../../redux/store";
import {addMessageActionCreater, updateNewMessageTextActionCreater} from "../../redux/dialogsReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/reduxStore";

let mapStateToProps=(state:AppRootStateType)=>{
return {
    dialogsPage:state.dialogs.dialogs,
    newMessageText:state.dialogs.newMessageText,
    dialogs:state.dialogs.messages
}
}
let mapDispatchToProps=(dispatch:(action:ActionType)=>void)=>{
return {
    addMes:()=>{
        dispatch(addMessageActionCreater())
    },
    onMessageChange:(e: ChangeEvent<HTMLTextAreaElement>)=>{
        if (e.currentTarget.value !== null) {
            let action = updateNewMessageTextActionCreater(e.currentTarget.value)
            dispatch(action)
        }
    }
}
}

export const DialogsContainer=connect(mapStateToProps,mapDispatchToProps)(Dialogs);