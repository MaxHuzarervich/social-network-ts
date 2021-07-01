import React, {ChangeEvent} from 'react';
import Dialogs from "./Dialogs";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import {AppStoreType} from "../../redux/redux-store";

type DialogsContainerPropsType = {
    store: AppStoreType
}

function DialogsContainer(props: DialogsContainerPropsType) {

    let state = props.store.getState().dialogsPage

    const onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator(state.newMessageBody))
    }
    const newMessageBody = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.store.dispatch(updateNewMessageBodyCreator(e.currentTarget.value))
    }
    return (
        <Dialogs
            sendMessage={onSendMessageClick}
            updateNewMessageBody={newMessageBody}
            dialogsPage={state}
            newMessageBody={state.newMessageBody}
        />
    )
}

export default DialogsContainer;