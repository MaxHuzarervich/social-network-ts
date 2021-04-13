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

let dialogsData = [
    {id:1, name:'Dimych'},
    {id:2, name:'Andrey'},
    {id:3, name:'Svetlana'},
    {id:4, name:'Sasha'},
    {id:5, name:'Victor'},
    {id:6, name:'Valera'}]
let messagesData = [
    {id:1, message:'hi'},
    {id:2, message:'How is your it-kamasutra?'},
    {id:3, message:'Yo'},
    {id:4, message:'Yo'},
    {id:5, message:'Yo'}
]

function Dialogs() {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name='Svetlana' id={3}/>
                <DialogItem name='Sasha' id={4}/>
                <DialogItem name='Victor' id={5}/>
                <DialogItem name='Valera' id={6}/>
            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
                <Message message={messagesData[2].message}/>
                <Message message={messagesData[3].message}/>
                <Message message={messagesData[4].message}/>
            </div>
        </div>
    )
}

export default Dialogs;