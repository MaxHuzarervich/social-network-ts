import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/Dialogs";
import Message from "./Message/Message";
import {messagesPageType, messagesType} from '../../redux/state';

type dialogsPropsType = {
dialogsPage: messagesPageType;

}

function Dialogs(props:dialogsPropsType) {
    let newPostElement = React.createRef<HTMLTextAreaElement>();
    const addPost = () => {alert(newPostElement.current?.value)}        // ? - если current существует тогда ->
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
            <button onClick={addPost} style={{backgroundColor:"Violet",borderRadius:'5px'}}>Add new message</button>
            <textarea ref={newPostElement} style={{borderRadius:'5px'}}></textarea>
        </div>
    )
}

export default Dialogs;