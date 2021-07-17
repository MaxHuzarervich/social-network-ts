import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {
    followAC,
    initialStateType,
    setCurrentPageAC,
    setUsersAC,
    setUsersTotalCountAC,
    unfollowAC,
    userType
} from "../../redux/users-reducer";
import axios from "axios";
import {Users} from "./Users";

export class UsersContainer extends React.Component<UsersPropsType, any> {

    constructor(props: UsersPropsType) {
        super(props);
    }

    componentDidMount() {
        //когда выполнишь запрос, выполни затем вот этот коллбек(response-ответ)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUser(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUser(response.data.items)
            });
    }

    render() {        //UsersContainer передает пропсы своему ребенку Users, а сама получает их из connect
        return <Users totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}
                      usersPage={this.props.usersPage}
                      setCurrentPage={this.props.setCurrentPage}
                      setUser={this.props.setUser}
                      setTotalUsersCount={this.props.setTotalUsersCount}

        />
    }
}

type MapStatePropsType = {
    usersPage: initialStateType,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number
}
type MapDispatchPropsType = {
    follow: (userID: number) => void,
    unfollow: (userID: number) => void,
    setUser: (users: Array<userType>) => void,
    setCurrentPage: (pageNumber: number) => void,
    setTotalUsersCount: (totalCount: number) => void
}
export type UsersPropsType = MapStatePropsType & MapDispatchPropsType

let MapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,               //кол-во пользователей на странице
        totalUsersCount: state.usersPage.totalUsersCount, //общее кол-во пользователей
        currentPage: state.usersPage.currentPage          //текущая страница
    } //connect смотрит, если эти компоненты не поменялись, то они не перерисовываются
}
let MapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
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
        },
        setCurrentPage: (pageNumber: number) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(setUsersTotalCountAC(totalCount))
        }
    }
}
//создаем контейнерную компоненту при помощи ф-ции connect
export default connect(MapStateToProps, MapDispatchToProps)(UsersContainer)