import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {dialogsPropsType, sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/dialogs-reducer';
import {Button, TextField} from "@material-ui/core";
import Dialogs from "./Dialogs";
import {dialogsPageType, dialogsType, messagesType, storeType} from "../../redux/store";


type DialogsContainerPropsType = {
    newMessageBody: string;
    store: storeType;
    dialogsPage: dialogsPageType
}

function DialogsContainer(props: DialogsContainerPropsType) {

    const onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator(props.newMessageBody))
    }
    const newMessageBody = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.store.dispatch(updateNewMessageBodyCreator(e.currentTarget.value))
    }
    return (
        <Dialogs dialogsPage={props.dialogsPage}
                 updateNewMessageBody={newMessageBody}
                 sendMessage={onSendMessageClick}/>
    )
}

export default DialogsContainer;