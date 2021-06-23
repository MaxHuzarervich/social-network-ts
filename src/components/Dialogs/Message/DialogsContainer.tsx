import React from 'react';
import {dialogsPropsType, sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/dialogs-reducer';
import Dialogs from "../Dialogs";


function DialogsContainer(props: dialogsPropsType) {

    const onSendMessageClick = () => {
        props.dispatch(sendMessageCreator(props.newMessageBody))
    }
    const newMessageBody = (body:string) => {
        props.dispatch(updateNewMessageBodyCreator(body))
    }
    return (
        <Dialogs
            sendMessage={onSendMessageClick}
            updateNewMessageBody={newMessageBody}
            dialogsPage={props.state}
            dispatch={props.dispatch}
            newMessageBody={props.newMessageBody}/>
    )
}

export default DialogsContainer;