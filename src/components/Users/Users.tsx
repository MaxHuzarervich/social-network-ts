import React from "react";
import {initialStateType} from "../../redux/users-reducer";
import s from "Users.module.css";

export let Users = (props:initialStateType) => {
    // для каждого пользователя вернуть <div>
    return <div>
        {props.users.map(u => <div key={u.id}>
        <span>
            <div>
                <img src={u.photoUrl} className={s.UsersPhoto}/>
            </div>
            <div>
                {u.followed ? <button onClick={()=>{props.unfollow(u.id)}}>Unfollow</button> :
                              <button onClick={()=>{props.follow(u.id)}}>Follow</button>}
            </div>
        </span>
        <span>
            <span>
                <div>{u.fullName}</div>
                <div>{u.status}</div>
            </span>
            <span>
                <div>{u.location.country}</div>
                <div>{u.location.city}</div>
            </span>
        </span>
        </div>)}
    </div>
}