import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {
    follow,
    initialStateType,
    setCurrentPage,
    setUsers,
    setUsersTotalCount, toggleIsFetching,
    unfollow,
    userType
} from "../../redux/users-reducer";
import axios from "axios";
import {Users} from "./Users";
import preloader from '../../assets/images/preloader.gif'
import {Preloader} from "../common/Preloader/Preloader";

export class UsersContainer extends React.Component<UsersPropsType, any> {

    // constructor(props: UsersPropsType) {
    //     super(props);
    // }

    componentDidMount() {
        this.props.toggleIsFetching(true); //запрос пошел
        //когда выполнишь запрос, выполни затем вот этот коллбек(response-ответ)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false); //запрос пришел, крутилка не нужна!
                this.props.setUser(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUser(response.data.items)
            });
    }

    render() {        //UsersContainer передает пропсы своему ребенку Users, а сама получает их из connect
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   usersPage={this.props.usersPage}
                   setCurrentPage={this.props.setCurrentPage}
                   setUser={this.props.setUser}
                   setTotalUsersCount={this.props.setTotalUsersCount}
                   isFetching={this.props.isFetching}
                   toggleIsFetching={this.props.toggleIsFetching}

            />
        </>
    }
}

type MapStatePropsType = {
    usersPage: initialStateType,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean
}
type MapDispatchPropsType = {
    follow: (userID: number) => void,
    unfollow: (userID: number) => void,
    setUser: (users: Array<userType>) => void,
    setCurrentPage: (pageNumber: number) => void,
    setTotalUsersCount: (totalCount: number) => void,
    toggleIsFetching: (isFetching: boolean) => void
}
export type UsersPropsType = MapStatePropsType & MapDispatchPropsType

let MapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,               //кол-во пользователей на странице
        totalUsersCount: state.usersPage.totalUsersCount, //общее кол-во пользователей
        currentPage: state.usersPage.currentPage,         //текущая страница
        isFetching: state.usersPage.isFetching
    } //connect смотрит, если эти компоненты не поменялись, то они не перерисовываются
}
// let MapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
//     return {
//         follow: (userID: number) => {
//             dispatch(followAC(userID))             //мы диспатчим результат работы action creator-а
//         },                                         //reducer этот action обрабатывает, стейт меняется и
//                                                    // происходит перерисовка
//         unfollow: (userID: number) => {
//             dispatch(unfollowAC(userID))
//         },
//         setUser: (users: Array<userType>) => {
//             dispatch(setUsersAC(users))
//         },                                                //создаем здесь коллбеки которые попадут в пропсы
//         setCurrentPage: (pageNumber: number) => {         //если компонента тебя вызовет просто задиспатч экшн
//             dispatch(setCurrentPageAC(pageNumber))        //мы диспатчим вызов экшн креатора!!!
//         },
//         setTotalUsersCount: (totalCount: number) => {
//             dispatch(setUsersTotalCountAC(totalCount))
//         },
//         toggleIsFetching: (isFetching: boolean) => {
//             dispatch(toggleIsFetchingAC(isFetching))
//         }
//     }
// }
//создаем контейнерную компоненту при помощи ф-ции connect
export default connect(MapStateToProps, {
    follow, unfollow, setUsers, setCurrentPage, setUsersTotalCount,
    toggleIsFetching
})(UsersContainer)