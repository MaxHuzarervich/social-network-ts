import React from 'react';
import Dialogs from "../Dialogs";
import {dialogsPropsType, sendMessageCreator, updateNewMessageBodyCreator} from "../../../redux/dialogs-reducer";
import store from "../../../redux/store";


function DialogsContainer(props: dialogsPropsType) {

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