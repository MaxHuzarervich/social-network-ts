import {ActionsTypes} from "./redux-store";

export type userType = {
    name: string,
    id: number,
    photos:
        {
            small: string,
            large: string
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


export type initialStateType = {
    users: Array<userType>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean
};

//инициализационный state,который будет инициализировать эту подветку
let initialState: initialStateType = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
}
//если сюда не придёт state то state-ом будет initialState
export const usersReducer = (state: initialStateType = initialState, action: ActionsTypes): initialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,  //пробегаемся по массиву users,map создает новый массив элементами которого будут все те же users
                users: state.users.map(u => { //map возвращает новый массив на основе старого
                    if (u.id === action.userID) {//если id этого пробегаемого user равен id который нужно follow,
                        // а он сидит в action.userID
                        return {...u, followed: true} //то нужно вернуть его копию,с противоположным followed
                    }
                    return u
                })//если id не совпадают то возращаем тот же объект
            }               //раз меняем что-то в массиве, нужно сделать также его копию
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                        if (u.id === action.userID) {
                            return {...u, followed: false}
                        }
                        return u;
                    }
                )
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
        default:                                       //default line
            return state;
    }
}

export const followAC = (userID: number) => {              //чистая ф-ция возвращающая action
    return {type: FOLLOW, userID} as const
}                         //user которого нужно follow
export const unfollowAC = (userID: number) => {
    return {type: UNFOLLOW, userID} as const
}                         //user которого нужно unfollow
export const setUsersAC = (users: Array<userType>) => {
    return {type: SET_USERS, users} as const                //засетать всех юзров
}
export const setCurrentPageAC = (currentPage: number) => {          //изменить текущую страничку
    return {type: SET_CURRENT_PAGE, currentPage} as const
}
export const setUsersTotalCountAC = (totalUsersCount: number) => {   //установить общее кол-во пользователей
    return {type: SET_TOTAL_USERS_COUNT, count: totalUsersCount} as const
}
export const toggleIsFetchingAC = (isFetching:boolean) => {
    return {type: TOGGLE_IS_FETCHING, isFetching} as const  //экшн-это объект у которго есть тип
                                                        // и св-во которое нужно редьюсеру для для обработки этого экшена
}