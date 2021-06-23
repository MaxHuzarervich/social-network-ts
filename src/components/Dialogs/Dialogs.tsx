import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {dialogsPropsType, sendMessageCreator} from '../../redux/dialogs-reducer';
import {Button, TextField} from "@material-ui/core";


function Dialogs(props: dialogsPropsType) {
    //значение переменной dialogsElements будет равно промапленному массиву объектов dialogs

    let dialogsElements =
        props.dialogsPage.dialogs.map(dialogs => <DialogItem name={dialogs.name} id={dialogs.id}/>)

    //значение переменной messageElements будет равно промапленному массиву объектов messages

    let messageElements =
        props.dialogsPage.messages.map(messages => <Message message={messages.message} id={messages.id}/>)

    const onSendMessageClick = () => {
        props.sendMessage();
    }
    const newMessageBody = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value
        props.updateNewMessageBody(body)
        // props.dispatch(updateNewMessageBodyCreator(e.currentTarget.value))
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
                        onChange={newMessageBody}
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