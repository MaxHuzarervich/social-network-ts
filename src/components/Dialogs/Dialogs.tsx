import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/Dialogs";
import Message from "./Message/Message";

type dialogsType = {
    id:number,
    name:string
}
type messagesType = {
    id:number,
    message:string
}
type DialogsType = {
    dialogs: Array<dialogsType>
    messages: Array<messagesType>
}

function Dialogs() {
    let dialogs = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Svetlana'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Victor'},
        {id: 6, name: 'Valera'}]
    let messages = [
        {id: 1, message: 'hi'},
        {id: 2, message: 'How is your it-kamasutra?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'}
    ]
    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)       // d = dialogs
    let messageElements = messages.map(m => <Message message={m.message}/>)             // m = messages
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