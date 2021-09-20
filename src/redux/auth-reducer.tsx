import {ActionsTypes} from "./redux-store";
import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

export type dataType = {
    id: number | null
    email: string | null
    login: string | null
}

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
            return {...state, ...action.data, isAuth: true} //если пришли пользовательские данные isAuth:true
        default:
            return state;

    }
}

export const setAuthUserData = (data: dataType) => {
    return {type: SET_USER_DATA, data: data} as const
}
//thunkCreator - ф-ция которая возвращает другую ф-цию
export const getAuthUserData = () => (dispatch: any) => {
    authAPI.me().then(response => {        //отправляем запрос на me и me нам сообщает залогинены мы или нет
        if (response.data.resultCode === 0) { //если мы залогинены то возвращается resultCode = 0,
            // и мы сетаем дату,логин,емаил в наш стейт и меняем isAuth на true
            return dispatch(setAuthUserData(response.data.data))
        }
    });
}