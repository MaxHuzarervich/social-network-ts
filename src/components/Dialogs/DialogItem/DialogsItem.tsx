import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './../Dialogs.module.css';
import {NamesType} from "../../../redux/dialogs-reducer";


function DialogItem(props: NamesType) {
    let path = '/dialogs/ + props.id'
    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}


export default DialogItem