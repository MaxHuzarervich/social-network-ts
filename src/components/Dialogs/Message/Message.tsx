import React from 'react';
import s from './../Dialogs.module.css';
import {MessagesType} from "../../../redux/dialogs-reducer";


function Message(props: MessagesType) {
    return <div className={s.message}>{props.message}</div>
}

export default Message;