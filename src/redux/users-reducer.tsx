import {ActionsTypes} from "./redux-store";

export type usersType = {
    id: number,
    followed: boolean,
    fullName: string,
    status: string,
    location: string,
    country: string
}

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW'

export type initialStateType = {
    users: Array<usersType>
}


//инициализационный state,который будет инициализировать эту подветку
let initialState: initialStateType = {
    users: [
        {id: 1, followed: true, fullName: 'Angelo', status: 'I am programmer', location: 'Sacramento', country: 'USA'},
        {id: 2, followed: false, fullName: 'Ivan', status: 'I am music editor', location: 'Moscow', country: 'Russia'},
        {id: 3, followed: true, fullName: 'John', status: 'I am superhero!', location: 'Sydney', country: 'Australia'},
    ]
}
//если сюда не придёт state то state-ом будет initialState
export const usersReducer = (state: initialStateType = initialState, action: ActionsTypes): initialStateType => {
    switch (action.type) {
        case FOLLOW:
            let stateCopy = {
                ...state,  //пробегаемся по массиву users,map создает новый массив элементами которого будут все те же users
                users: state.users.map(u => {
                    if(u.id === action.userID){//если id этого пробегаемого user равен id который нужно follow,
                        // а он сидит в action.userID
                       return {...u, followed:true} //то нужно вернуть его копию,с противоположным followed
                    }
                    return  u})//если id не совпадают то возращаем тот же объект
            }               //раз меняем что-то в массиве, нужно сделать также его копию
        case UNFOLLOW:

        default:                                       //default line
            return state;
    }
}

export const followAC =
    (userID: number) => {
        return {
            type: FOLLOW,
            userID: userID
        } as const
    }
export const unfollowAC =
    (userID: number) => {
        return {
            type: UNFOLLOW,
            userID: userID
        } as const
    }