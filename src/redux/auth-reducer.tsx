import {ActionsTypes} from "./redux-store";

const SET_USER_DATA = 'SET_USER_DATA';

export type dataType = {
    id: number | null
    email: string | null
    login: string | null
}

export type InitialStateType = {
    data: dataType,
    isAuth: boolean
};

let initialState: InitialStateType = {
    id: null,
    email: null,
    login: null,
    isAuth: false //незалогинен
}

//все данные которые нужны редьюсеру для преобразования стейта приходят в экшене
export const authReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            debugger
            return {...state, data: action.data, isAuth: true} //если пришли пользовательские данные isAuth:true
        default:
            return state;

    }
}

export const setAuthUserData = (data: dataType) => {
    return {type: SET_USER_DATA, data: data} as const
}