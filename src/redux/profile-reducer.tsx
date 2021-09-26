import {ActionsTypes} from "./redux-store";
import {profileAPI, usersAPI} from "../api/api";
import {Dispatch} from "redux";

export type postType = {
    id: number,
    message: string,
    likesCount: number
}

export type initialStateType = {
    posts: Array<postType>
    messageForNewPost: string
    profile: ProfileType
    status: string
}

export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }
    photos: {
        small: string
        large: string
    }
}

const ADD_POST = 'ADD-POST'
const CHANGE_NEW_TEXT = 'CHANGE-NEW-TEXT'
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const SET_STATUS = 'SET_STATUS'

//инициализационный state,который будет инициализировать эту подветку
let initialState: initialStateType = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 15},
        {id: 2, message: 'My first post', likesCount: 20},
    ],
    messageForNewPost: 'Social Network',
    profile: {} as ProfileType,
    status: 'status!'
}
//если сюда не придёт state то state-ом будет initialState

export const profileReducer = (state: initialStateType = initialState, action: ActionsTypes): initialStateType => {
    switch (action.type) {
        case ADD_POST: {//функция для создания нового поста
            const newPost: postType = {                                        //отправляем
                id: new Date().getTime(),
                message: action.postText,
                likesCount: 3
            }
            return {
                ...state,          //делаем копию по правилу иммутабильности!!! исходный объект не может быть изменен
                posts: [...state.posts, newPost], // и глубокую копию массива posts,потому-что поверхн.копия посты не копирует!
                messageForNewPost: ''
            }
        }
        case CHANGE_NEW_TEXT: {//впечатываем
            return {
                ...state,//делаем копию по правилу иммутабильности!!! исходный объект не может быть изменен
                messageForNewPost: action.newText
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile   //копия стейта, в которой меняем профайл на профайл который сидит в экшн
            }
        }
        default: {                                      //default line
            return state;
        }
    }
}

//экшн - объект у которого инкапсулированы все данные чтобы редьюсер получил этот экшн и применил на свой стейт
export const addPostAC =
    (postText: string) => {
        return {
            type: ADD_POST,
            postText: postText
        } as const
    }
export const newTextChangeHandlerAC =
    (newText: string) => {
        return {
            type: CHANGE_NEW_TEXT,
            newText: newText
        } as const
    }
export const setUserProfileAC = (profile: ProfileType) => {
    return {
        type: SET_USER_PROFILE,
        profile: profile
    } as const
}
export const setStatusAC = (status:string) => {
    return {
        type: SET_STATUS,
        status:status
    } as const
}
//thunk
export const getUserProfile = (userId: string) => (dispatch: Dispatch<ActionsTypes>) => {
    usersAPI.getProfile(userId).then(response => {
        dispatch(setUserProfileAC(response.data)); //берем наш объект profile и сетаем его в редьюсер
    })  //диспатчим экшн, что приводит к изменениям в редьюсере стейта
}
export const getStatus = (userId: string) => (dispatch: Dispatch<ActionsTypes>) => {
    profileAPI.getStatus(userId).then(response => {
        debugger;
        dispatch(setStatusAC(response.data))
    })
}
export const updateStatus = (status:string) => (dispatch: Dispatch<ActionsTypes>) => {
    profileAPI.updateStatus(status).then(response => {
        if(response.data.resultCode === 0){
        dispatch(setStatusAC(status))}
    })
}
