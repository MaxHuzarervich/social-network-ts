import {ActionsTypes} from "./redux-store";

const SET_USER_DATA = 'SET-USER-DATA';


export type initialStateType = {
    userId: number | null,
    email: string | null,
    login: string | null,
};

//инициализационный state,который будет инициализировать эту подветку
let initialState: initialStateType = {
    userId: null,
    email: null,
    login: null,
}
//если сюда не придёт state то state-ом будет initialState
export const authReducer = (state: initialStateType = initialState, action: ActionsTypes): initialStateType => {
    switch (action.type) {
        // case SET_USER_DATA:
        //     return {
        //         ...state,
        //         ...action.data
        //     }
        default:
            return state;
    }
}

export const setUserDataAC = (data: initialStateType) => ({type: SET_USER_DATA, data})