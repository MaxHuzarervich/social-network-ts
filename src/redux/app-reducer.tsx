import React from "react";
import {ActionsTypes} from "./redux-store";
import {getAuthUserData} from "./auth-reducer";

const SET_INITIALIZED = 'SET_INITIALIZED';

export type InitialStateType = {
    initialized: boolean
};

let initialState: InitialStateType = {
    initialized: false
}

//все данные которые нужны редьюсеру для преобразования стейта приходят в экшене
export const appReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {...state, initialized: true}
        default:
            return state;

    }
}

export const setInitialized = () => {
    return {type: SET_INITIALIZED} as const
}

export const initializeApp = () => (dispatch: any) => {
    let promise = dispatch(getAuthUserData());
    Promise.all([promise]).then(() => {
        dispatch(setInitialized())
    })
}