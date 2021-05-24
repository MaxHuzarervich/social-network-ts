import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {dialogsPageType, messagesType} from '../../redux/state';

type dialogsPropsType = {
    dialogsPage: dialogsPageType;
}

function Dialogs(props: dialogsPropsType) {

    //значение переменной dialogsElements будет равно промапленному массиву объектов dialogs

    let dialogsElements =
        props.dialogsPage.dialogs.map(dialogs => <DialogItem name={dialogs.name} id={dialogs.id}/>)

    //значение переменной messageElements будет равно промапленному массиву объектов messages

    let messageElements =
        props.dialogsPage.messages.map(messages => <Message message={messages.message} id={messages.id}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                 {dialogsElements}

            </div>
            <div className={s.messages}>

                {messageElements}

            </div>
        </div>
    )
}

export default Dialogs;