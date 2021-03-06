import React from "react";
import {Button} from "@material-ui/core";
import s from "./Users.module.css";
import {NavLink} from "react-router-dom";
import {userType} from "../../redux/users-reducer";
import userPhoto from '../../assets/images/ava.jpg'

type UserPageType = {
    user: userType
    followingInProgress: Array<number>
    unfollow: (userID: number) => void
    follow: (userID: number) => void
}

export let User = ({user, followingInProgress, unfollow, follow}: UserPageType) => {
    return <div>
            <div className={s.user}>
                <div>
                    <div className={s.UserImg}>
                        <NavLink to={'/profile/' + user.id}>
                            <img src={user.photos.small != null ? user.photos.small : userPhoto}
                            className={s.userPhoto} alt={'avatar'}/>
                        </NavLink>
                    </div>
                    <div className={s.follow}>
                        {user.followed ?
                            <Button disabled={followingInProgress.some(id => id === user.id)}//если кто-то из этого
                                // массива равен id пользователя, то метод some вернет true
                                    color={'default'} onClick={() => {
                                unfollow(user.id);
                            }}>Unfollow</Button> :
                            <Button disabled={followingInProgress.some(id => id === user.id)} color={'default'}
                                    onClick={() => {
                                        follow(user.id);
                                    }}>Follow</Button>}
                    </div>
                </div>
                <span>
                            <span>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                            </span>
                            <span>
                            {/*<div>{u.location.country}</div>*/}
                                {/*<div>{u.location.city}</div>*/}
                            </span>
                            </span>
            </div>
        </div>}
