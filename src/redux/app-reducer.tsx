import React from "react";
import {ActionsTypes} from "./redux-store";

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
            return {...state, initialized:true}
        default:
            return state;

    }
}

export const setInitialized = (initialized: boolean) => {
    return {type: SET_INITIALIZED, payload: initialized} as const
}