import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Dialogs.module.css';

type DialogItemType = {
    name: string,
    id: number
}
type MessageType = {
    message: string
}

function DialogItem(props: DialogItemType) {
    let path = '/dialogs/ + props.id'
    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name} </NavLink>
    </div>
}

function Message(props: MessageType) {
    return <div className={s.message}>{props.message}</div>
}

function Dialogs() {
    let dialogs = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Svetlana'},
        {id: 4, name: 'Sasha'},                        // d = dialogs
        {id: 5, name: 'Victor'},
        {id: 6, name: 'Valera'}]
    let messages = [
        {id: 1, message: 'hi'},
        {id: 2, message: 'How is your it-kamasutra?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},                        // m = messages
        {id: 5, message: 'Yo'}
    ]
    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messageElements = messages.map(m => <Message message={m.message}/>)
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