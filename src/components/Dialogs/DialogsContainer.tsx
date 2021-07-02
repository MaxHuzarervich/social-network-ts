import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {dialogsPropsType, sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/dialogs-reducer';
import {Button, TextField} from "@material-ui/core";
import Dialogs from "./Dialogs";
import {dialogsPageType, dialogsType, messagesType, storeType} from "../../redux/store";
import {StoreContext} from "../../StoreContext";
import {connect} from "react-redux";


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

//Создаем контейнерную компоненту при помощи redux

//Мы вызвали ф-цию connect, а она вернула нам другую ф-цию и мы вызываем ту ф-цию которую вернул нам предыдущий вызов
const SuperDialogsContainer = connect()(Dialogs); //как бы законектили нашу презентационную компоненту Dialogs к store

export default DialogsContainer;