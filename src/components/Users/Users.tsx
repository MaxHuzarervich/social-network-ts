import React from "react";
import {initialStateType} from "../../redux/users-reducer";

export let Users = (props:initialStateType) => {
    // для каждого пользователя вернуть <div>
    return <div>
        {props.users.map(u => <div key={u.id}>
        <span>
            <div>
                <img src={u.photoUrl}/>
            </div>
            <div>
                <button>Follow</button>
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