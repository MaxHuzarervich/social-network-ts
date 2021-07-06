import {ActionsTypes} from "./redux-store";

export type usersType = {
    id: number,
    photoUrl:string,
    followed: boolean,
    fullName: string,
    status: string,
    location: {
        country: string,
        city: string
    }
}

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS'

export type initialStateType = {
    users: Array<usersType>
}


//инициализационный state,который будет инициализировать эту подветку
let initialState: initialStateType = {
    users: [
        {
            id: 1,
            photoUrl:'https://ru.files.fm/u/xrgdrrxdj',
            followed: true,
            fullName: 'Angelo',
            status: 'I am programmer',
            location: {city: 'Sacramento', country: 'USA'}
        },
        {
            id: 2,
            photoUrl:'https://ru.files.fm/u/xrgdrrxdj',
            followed: false,
            fullName: 'Ivan',
            status: 'I am music editor',
            location: {city: 'Moscow', country: 'Russia'}
        },
        {
            id: 3,
            photoUrl:'https://ru.files.fm/u/xrgdrrxdj',
            followed: true,
            fullName: 'John',
            status: 'I am superhero!',
            location: {city: 'Sydney', country: 'Australia'}
        },
    ]
}
//если сюда не придёт state то state-ом будет initialState
export const usersReducer = (state: initialStateType = initialState, action: ActionsTypes): initialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,  //пробегаемся по массиву users,map создает новый массив элементами которого будут все те же users
                users: state.users.map(u => {
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
        case SET_USERS: {            //берем из стейта старых юзеров,и дописываем к ним юзеров из экшена
            return {...state, users: [...state.users, ...action.users]}//склеиваем 2-а массива тот который
            // был в стейте и тот который пришел в экшене
        }
        default:                                       //default line
            return state;
    }
}

export const followAC = (userID: number) => {
    return {type: FOLLOW, userID: userID} as const
}
export const unfollowAC = (userID: number) => {
    return {type: UNFOLLOW, userID: userID} as const
}
export const setUsersAC = (users: Array<usersType>) => {
    return {type: SET_USERS, users: users} as const
}