import React from "react";
import {Users} from "./Users";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {followAC, initialStateType, setUsersAC, unfollowAC, userType} from "../../redux/users-reducer";

type MapStatePropsType = {
    usersPage: initialStateType
}
type MapDispatchPropsType = {
    follow: (userID: number) => void,
    unfollow: (userID: number) => void,
    setUser: (users: Array<userType>) => void
}
export type UsersPropsType = MapStatePropsType & MapDispatchPropsType

let MapStateToProps = (state: AppStateType):MapStatePropsType => {
    return {
        usersPage: state.usersPage
    }
}
let MapDispatchToProps = (dispatch: Dispatch):MapDispatchPropsType => {
    return {
        follow: (userID: number) => {
            dispatch(followAC(userID))             //мы диспатчим результат работы action creator-а
        },                                         //reducer этот action обрабатывает, стейт меняется и
                                                   // происходит перерисовка
        unfollow: (userID: number) => {
            dispatch(unfollowAC(userID))
        },
        setUser: (users: Array<userType>) => {
            dispatch(setUsersAC(users))
        }
    }
}
//создаем контейнерную компоненту при помощи ф-ции connect
export const UsersContainer = connect(MapStateToProps, MapDispatchToProps)(Users)