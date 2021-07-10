import React from "react";
import {UsersPropsType} from "./UsersContainer";

export let Users = (props:UsersPropsType) => {
    if(props.usersPage.users.length === 0){
props.setUser ([
    {
        id: 1,
        photoUrl: 'https://files.fm/thumb_show.php?i=w972bbxwg',
        followed: true,
        fullName: 'Angelo',
        status: 'I am programmer',
        location: {city: 'Sacramento', country: 'USA'}
    },
    {
        id: 2,
        photoUrl: 'https://files.fm/thumb_show.php?i=w972bbxwg',
        followed: false,
        fullName: 'Ivan',
        status: 'I am music editor',
        location: {city: 'Moscow', country: 'Russia'}
    },
    {
        id: 3,
        photoUrl: 'https://files.fm/thumb_show.php?i=w972bbxwg',
        followed: true,
        fullName: 'John',
        status: 'I am superhero!',
        location: {city: 'Sydney', country: 'Australia'}
    },
])}


    // для каждого пользователя вернуть <div>
    return <div>
        {props.usersPage.users.map(u => <div key={u.id}>
        <span>
            <div>
                <img src={u.photoUrl} />
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