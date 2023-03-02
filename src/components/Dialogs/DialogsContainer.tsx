import React, {ChangeEvent} from "react";

import {
    StoreType
} from "../../redux/store";
import {addMessageActionCreater, updateNewMessageTextActionCreater} from "../../redux/dialogsReducer";
import {Dialogs} from "./Dialogs";
import {StoreContext} from "../../StoreContext";

/*type DialogsContainerPropsType = {
    store: StoreType
}*/


export function DialogsContainer(/*props: DialogsContainerPropsType*/) {
    return (
        <StoreContext.Consumer>
            {(store) => {
                const addMes = () => {
                    store.dispatch(addMessageActionCreater())
                }

                const onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
                    if (e.currentTarget.value !== null) {
                        let action = updateNewMessageTextActionCreater(e.currentTarget.value)
                        store.dispatch(action)
                    }
                }
                return <Dialogs
                    addMes={addMes}
                    onMessageChange={onMessageChange}
                    dialogs={store._state.dialogsPage.messages}
                    newMessageText={store._state.dialogsPage.newMessageText}
                    dialogsPage={store._state.dialogsPage.dialogs}
                />
            }

            }
        </StoreContext.Consumer>
    );
}