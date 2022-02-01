import React from "react";
import {UsersContainerPropsType} from "./UsersContainer";
import {Paginator} from "../common/Paginator/Paginator";
import {User} from "./User";


export let Users = ({currentPage, onPageChanged, totalUsersCount, pageSize, ...props}: UsersContainerPropsType) => {
    return (
        <div>
            <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                       totalUsersCount={totalUsersCount} pageSize={pageSize} {...props}/>


            <div>
                {props.usersPage.users.map(u => <User user={u}
                                                      followingInProgress={props.followingInProgress}
                                                      follow={props.follow}
                                                      unfollow={props.unfollow}
                                                      key={u.id}/>)}
            </div>
        </div>
    )
}
