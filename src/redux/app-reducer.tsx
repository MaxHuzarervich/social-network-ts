import {ActionsTypes} from "./redux-store";
import {getAuthUserData} from "./auth-reducer";

const SET_INITIALIZED = 'SET_INITIALIZED';
const SET_ERROR = 'SET_ERROR'

export type InitialStateType = {
    error: string | null
    initialized: boolean
};

let initialState: InitialStateType = {
    error: null,
    initialized: false
}

//все данные которые нужны редьюсеру для преобразования стейта приходят в экшене
export const appReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case SET_ERROR:
            return {...state, error: action.error}
        case SET_INITIALIZED:
            return {...state, initialized: true}
        default:
            return state;

    }
}

export const setInitialized = () => {
    return {type: SET_INITIALIZED} as const
}
export const setAppError = (error: string | null) => {
    return {type: SET_ERROR, error} as const
}

export const initializeApp = () => (dispatch: any) => {
    let promise = dispatch(getAuthUserData());
    Promise.all([promise]).then(() => {
        dispatch(setInitialized())
    })
}