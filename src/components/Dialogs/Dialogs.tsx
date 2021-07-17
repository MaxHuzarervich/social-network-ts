import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {Button, TextField} from "@material-ui/core";
import {DialogsPropsType} from "./DialogsContainer";


function Dialogs(props: DialogsPropsType) {
    //значение переменной dialogsElements будет равно промапленному массиву объектов dialogs

    let dialogsElements =                     //key id элемента из которого мы получаем jsx элемент!!!
        props.dialogsPage.dialogs.map(dialogs => <DialogItem name={dialogs.name} key={dialogs.id} id={dialogs.id}/>)

    //значение переменной messageElements будет равно промапленному массиву объектов messages

    let messageElements =
        props.dialogsPage.messages.map(messages => <Message message={messages.message} key={messages.id}
                                                            id={messages.id}/>)

    const onSendMessageClick = () => {
        props.sendMessage(props.newMessageBody)
    }
    const updateNewMessageBody = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewMessageBody(e)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                {dialogsElements}

            </div>
            <div className={s.messages}>

                <div>{messageElements}</div>

                <div className={s.textField}>
                    <TextField
                        value={props.newMessageBody}
                        onChange={updateNewMessageBody}
                        id="outlined-basic"
                        variant="outlined"
                        placeholder={'Enter your message'}
                    />
                </div>
                <div>
                    <Button onClick={onSendMessageClick} variant="contained" color="primary">Send</Button>

                    <Button variant="contained" color="secondary">Delete</Button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;