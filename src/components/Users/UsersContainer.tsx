import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    follow,
    initialStateType,
    requestUsers,
    setCurrentPage,
    toggleFollowingProgress,
    unfollow,
    userType
} from "../../redux/users-reducer";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/users-selectors";

//контейнерная классовая компонента

export class UsersContainer extends React.Component<UsersContainerPropsType> {

    //componentDidMount - метод жизненного цикла!
    componentDidMount() {
        const {currentPage, pageSize} = this.props
        this.props.getUsers(currentPage, pageSize);
    }

    onPageChanged = (pageNumber: number) => {
        const{pageSize} = this.props
        this.props.getUsers(pageNumber, pageSize)
    }

    render() {        //UsersContainer передает пропсы своему ребенку Users, а сама получает их из connect
        return <>
            {this.props.isFetching ? <Preloader/> :
                <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    usersPage={this.props.usersPage}
                    setCurrentPage={this.props.setCurrentPage}
                    setUsers={this.props.setUsers}
                    setUsersTotalCount={this.props.setUsersTotalCount}
                    isFetching={this.props.isFetching}
                    toggleIsFetching={this.props.toggleIsFetching}
                    onPageChanged={this.onPageChanged}
                    // toggleFollowingProgress={this.props.toggleFollowingProgress}
                    followingInProgress={this.props.followingInProgress}
                    getUsers={this.props.getUsers}
                />}
        </>
    }
}

export type MapStatePropsType = {
    usersPage: initialStateType,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: Array<number>
}

export type FunctionsForUsersComponentPropsType = {
    follow: (userID: number) => void,
    unfollow: (userID: number) => void,
    setUsers: (users: Array<userType>) => void,
    setCurrentPage: (pageNumber: number) => void,
    setUsersTotalCount: (totalCount: number) => void,
    toggleIsFetching: (isFetching: boolean) => void,
    onPageChanged: (pageNumber: number) => void,
    getUsers: (currentPage: number, pageSize: number) => void
    // toggleFollowingProgress: (isFetching: boolean, id: number) => void
}

export type UsersContainerPropsType = MapStatePropsType & FunctionsForUsersComponentPropsType

let MapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        usersPage: getUsers(state),
        pageSize: getPageSize(state),               //кол-во пользователей на странице
        totalUsersCount: getTotalUsersCount(state), //общее кол-во пользователей
        currentPage: getCurrentPage(state),         //текущая страница
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    } //connect смотрит, если эти компоненты не поменялись, то они не перерисовываются
}

export default compose<React.ComponentType>(
    withAuthRedirect,
    connect(MapStateToProps,
        {
            follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers: requestUsers
        }
    )
)(UsersContainer)