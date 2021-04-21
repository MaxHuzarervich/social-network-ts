import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/Dialogs";
import Message from "./Message/Message";
import {messagesPageType, messagesType} from '../../redux/state';

type dialogsPropsType = {
    dialogsPage: messagesPageType;
}

function Dialogs(props: dialogsPropsType) {
    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)       // d = dialogs
    let messageElements = props.dialogsPage.messages.map(m => <Message message={m.message} id={m.id}/>)             // m = messages
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