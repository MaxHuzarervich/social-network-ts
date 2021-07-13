import React from "react";
import {UsersPropsType} from "./UsersContainer";
import {Button} from "@material-ui/core";
import './Users.module.css';
import axios from 'axios';
import userPhoto from '../../assets/images/user.png'


export let Users = (props: UsersPropsType) => {
    let getUsers = () => {if (props.usersPage.users.length === 0) {
        //когда выполнишь запрос, выполни затем вот этот коллбек(response-ответ)
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            debugger
            props.setUser(response.data.items)
        });

    }}
    // для каждого пользователя вернуть <div>
    return <div className='User-Img'>
        <button onClick={getUsers}>GetUsers</button>
        {props.usersPage.users.map(u => <div key={u.id}>
        <div>
            <div>
                <img src={u.photos.small != null ? u.photos.small : userPhoto}/>
            </div>
            <div>
                {u.followed ? <Button color={'default'} onClick={() => {
                        props.unfollow(u.id)
                    }}>Unfollow</Button> :
                    <Button color={'default'} onClick={() => {
                        props.follow(u.id)
                    }}>Follow</Button>}
            </div>
        </div>
            <span>
            <span>
                <div>{u.name}</div>
                <div>{u.status}</div>
            </span>
            <span>
                <div>{'u.location.country'}</div>
                <div>{'u.location.city'}</div>
            </span>
        </span>
        </div>)}
    </div>
}