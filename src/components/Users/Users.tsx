import React from "react";
import {UsersContainerPropsType} from "./UsersContainer";
import {Button} from "@material-ui/core";
import s from "./Users.module.css";
import user from '../../assets/images/user.jpg'
import {NavLink} from "react-router-dom";
import axios from "axios";


export let Users = (props: UsersContainerPropsType) => {

    //округляем кол-во страниц в большую сторону т.к. при делении может получиться нецелое число

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize) //кол-во страниц

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p ? s.selectedPage : ''}
                             onClick={(event) => {
                                 props.onPageChanged(p)
                             }}>{p}</span>//'p' по которому мы итерируемся будет текущей страничкой
            })}
        </div>

        {props.usersPage.users.map(u => <div key={u.id}>
            <div className={s.user}>
                <div>
                    <div className={s.UserImg}>
                        <NavLink to={'/profile/' + u.id}>Avatar should be here</NavLink>
                        {/*<NavLink><img  src={u.photos.small != null ? u.photos.small : user}/></NavLink>*/}
                    </div>
                    <div className={s.follow}>
                        {u.followed ? <Button disabled={props.followingInProgress} color={'default'} onClick={() => {
                            debugger
                                props.toggleFollowingProgress(true);
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/unfollow/${u.id}`,
                                    {
                                        withCredentials: true,
                                        headers: {
                                            'API-KEY': 'aa1f6061-8f98-4319-8eee-239786445cdc'
                                        }
                                    })
                                    .then(response => {
                                        if (response.data.resultCode == 0) {
                                            props.unfollow(u.id)
                                        }
                                        props.toggleFollowingProgress(false)
                                    });
                            }}>Unfollow</Button> :
                            <Button disabled={props.followingInProgress} color={'default'} onClick={() => {
                                props.toggleFollowingProgress(true);
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {},
                                    {
                                        withCredentials: true,
                                        headers: {
                                            'API-KEY': 'aa1f6061-8f98-4319-8eee-239786445cdc'
                                        }
                                    })
                                    .then(response => {
                                        if (response.data.resultCode == 0) {
                                            props.follow(u.id)
                                        }
                                        props.toggleFollowingProgress(false);
                                    });
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
            </div>
        </div>)}
    </div>
}