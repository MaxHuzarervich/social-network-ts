import React from 'react';
import Dialogs from "../Dialogs";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../../redux/dialogs-reducer";
import store, {AppStoreType} from "../../../redux/redux-store";

type DialogsContainerPropsType = {
    store: AppStoreType
}

function DialogsContainer(props: DialogsContainerPropsType) {

    let state = props.store.getState().dialogsPage

    const onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator(props.newMessageBody))
    }
    const newMessageBody = (body:string) => {
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }
    return (
        <Dialogs
            store={store}
            sendMessage={onSendMessageClick}
            updateNewMessageBody={newMessageBody}
            dialogsPage={state}
            dispatch={props.dispatch}
            newMessageBody={props.newMessageBody}/>
    )
}

export default DialogsContainer;