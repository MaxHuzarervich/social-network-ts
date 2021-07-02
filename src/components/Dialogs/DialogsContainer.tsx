import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {dialogsPropsType, sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/dialogs-reducer';
import {Button, TextField} from "@material-ui/core";
import Dialogs from "./Dialogs";
import {dialogsPageType, dialogsType, messagesType, storeType} from "../../redux/store";
import {StoreContext} from "../../StoreContext";


type DialogsContainerPropsType = {
    newMessageBody: string;
    store: storeType;
    dialogsPage: dialogsPageType
}

function DialogsContainer(props: DialogsContainerPropsType) {
    //Consumer как бы потребитель из store
    return (
        <StoreContext.Consumer>
            {(store) => {
                const onSendMessageClick = () => {
                    store.dispatch(sendMessageCreator(props.newMessageBody))
                }
                const newMessageBody = (e: ChangeEvent<HTMLTextAreaElement>) => {
                    store.dispatch(updateNewMessageBodyCreator(e.currentTarget.value))
                }
                return <Dialogs dialogsPage={props.dialogsPage}
                                updateNewMessageBody={newMessageBody}
                                sendMessage={onSendMessageClick}/>
            }}
        </StoreContext.Consumer>
    )
}

export default DialogsContainer;