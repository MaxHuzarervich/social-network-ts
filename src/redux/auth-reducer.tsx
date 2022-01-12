import {ActionsTypes} from "./redux-store";
import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

export type InitialStateType = {
    id: number | null
    email: string | null
    login: string | null
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
            return {...state, ...action.payload} //если пришли пользовательские данные isAuth:true
        default:
            return state;

    }
}

export const setAuthUserData = (id: number, email: string, login: string, isAuth: boolean) => {
    return {type: SET_USER_DATA, payload: {id, email, login, isAuth}} as const
}

//thunkCreator - ф-ция которая возвращает другую ф-цию
export const getAuthUserData = () => (dispatch: any) => {
    authAPI.me()
        .then(response => {        //отправляем запрос на me и me нам сообщает залогинены мы или нет
            if (response.data.resultCode === 0) { //если мы залогинены то возвращается resultCode = 0,
                // и мы сетаем дату,логин,емаил в наш стейт и меняем isAuth на true
                let {id, login, email} = response.data.data
                return dispatch(setAuthUserData(id, email, login, true))
            }
        });
}

export const login = (email: string, password: string, rememberMe: boolean) => (dispatch: any) => {
    authAPI.login(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                return dispatch(getAuthUserData()) //санка уходит через dispatch в store
            }
        })
}

export const Logout = () => (dispatch: any) => {
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                return dispatch(setAuthUserData(0, '', '', false))
            }
        })
}