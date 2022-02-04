import {ActionsTypes, AppStateType} from "./redux-store";
import {usersAPI} from "../api/api";
import {Dispatch} from "redux";
import {updateObjectInArray} from "../utils/validators/object-helpers";

export type userType = {
    name: string,
    id: number,
    photos:
        {
            small: any,
            large: any
        },
    status: string,
    followed: boolean,
    location: {
        country: string,
        city: string
    }
}


const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IN_FOLLOWING_PROGRESS = 'TOGGLE_IN_FOLLOWING_PROGRESS'


export type initialStateType = {
    users: Array<userType>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: Array<number>
};

//инициализационный state,который будет инициализировать эту подветку
let initialState: initialStateType = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}
//если сюда не придёт state то state-ом будет initialState
export const usersReducer = (state: initialStateType = initialState, action: ActionsTypes): initialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userID, 'id', {followed:true})
            }               //раз меняем что-то в массиве, нужно сделать также его копию
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userID, 'id', {followed:false})
            }
        case SET_USERS: {
            return {...state, users: action.users}

        }
        case SET_CURRENT_PAGE: { //меняем currentPage на тот что сидит в action
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.count} //делаем копию стейта и подменяем
            // то св-во которое нужно подменить в этой копии
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching} //теперь можно задеспатчить экшн создав экшнкреатор
        }
        case TOGGLE_IN_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId] //если идет подписка
                    : state.followingInProgress.filter(id => id !== action.userId) //
            }
        }
        default:                                       //default line
            return state;
    }
}

export const followSuccess = (userID: number) => {              //чистая ф-ция возвращающая action
    return {type: FOLLOW, userID} as const
}                         //user которого нужно follow
export const unfollowSuccess = (userID: number) => {
    return {type: UNFOLLOW, userID} as const
}                         //user которого нужно unfollow
export const setUsers = (users: Array<userType>) => {
    return {type: SET_USERS, users} as const                //засетать всех юзров
}
export const setCurrentPage = (currentPage: number) => {          //изменить текущую страничку
    return {type: SET_CURRENT_PAGE, currentPage} as const
}
export const setUsersTotalCount = (totalUsersCount: number) => {   //установить общее кол-во пользователей
    return {type: SET_TOTAL_USERS_COUNT, count: totalUsersCount} as const
}
export const toggleIsFetching = (isFetching: boolean) => {
    return {type: TOGGLE_IS_FETCHING, isFetching} as const  //экшн-это объект у которго есть тип
    // и св-во которое нужно редьюсеру для для обработки этого экшена
}
export const toggleFollowingProgress = (isFetching: boolean, userId: number) => {
    return {type: TOGGLE_IN_FOLLOWING_PROGRESS, isFetching, userId} as const
}

//thunkCreator - возвращает санку
export const requestUsers = (page: number, pageSize: number) => {
    return async (dispatch: any) => {
        dispatch(toggleIsFetching(true)); //запрос пошел
        dispatch(setCurrentPage(page)) //выделить в пагинации текущую страницу
        //когда пользователи получатся, продолжим обрабатывать ответ в then
        let response = await usersAPI.getUsers(page, pageSize)
        dispatch(toggleIsFetching(false)); //запрос пришел, крутилка не нужна!
        dispatch(setUsers(response.items));
        dispatch(setUsersTotalCount(response.totalCount));
    }
}

type DispatchType = Dispatch<ActionsTypes>

const followUnfollowFlow = async (dispatch: any, userID: number, apiMethod: any, actionCreator: any) => {
    dispatch(toggleFollowingProgress(true, userID))
    let response = await apiMethod(userID)
    if (response.resultCode === 0) {
        dispatch(actionCreator(userID))
    }
    dispatch(toggleFollowingProgress(false, userID))
}

export const follow = (userID: number) => {
    return async (dispatch: DispatchType) => {
        await followUnfollowFlow(dispatch, userID, usersAPI.follow.bind(usersAPI), followSuccess)
    }
}
export const unfollow = (userID: number) => {
    return async (dispatch: DispatchType) => {
        await followUnfollowFlow(dispatch, userID, usersAPI.unfollow.bind(usersAPI), unfollowSuccess)
    }
}