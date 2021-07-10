import React from "react";
import {UsersPropsType} from "./UsersContainer";
import {Button} from "@material-ui/core";
import './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/images/'


export let Users = (props: UsersPropsType) => {
    if (props.usersPage.users.length === 0) {
        debugger
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response=> {

            props.setUser(response.data.items)
        });

    }


    // для каждого пользователя вернуть <div>
    return <div>
        {props.usersPage.users.map(u => <div key={u.id}>
        <span>
            <div>
                <img src={ u.photos.small != null ? u.photos.small : }/>
            </div>
            <div>
                {u.followed ? <Button color={'default'} onClick={() => {
                        props.unfollow(u.id)
                    }}>Unfollow</Button> :
                    <Button color={'default'} onClick={() => {
                        props.follow(u.id)
                    }}>Follow</Button>}
            </div>
        </span>
            <span>
            <span>
                <div>{u.fullName}</div>
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