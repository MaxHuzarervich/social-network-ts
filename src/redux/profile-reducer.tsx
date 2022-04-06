import {ActionsTypes} from "./redux-store";
import {profileAPI, usersAPI} from "../api/api";
import {Dispatch} from "redux";
import {setAppError} from "./app-reducer";

export type postType = {
    id: number,
    message: string,
    likesCount: number
}

export type initialStateType = {
    posts: Array<postType>
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
    photos: PhotoType
    aboutMe: string
}
type PhotoType = {
    small: string
    large: string
}

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const SET_STATUS = 'SET_STATUS'
const DELETE_POST = 'DELETE_POST'
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS'

//инициализационный state,который будет инициализировать эту подветку
let initialState: initialStateType = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 15},
        {id: 2, message: 'My first post', likesCount: 20},
    ],
    profile: {} as ProfileType,
    status: ''
}
//если сюда не придёт state то state-ом будет initialState

export const profileReducer = (state: initialStateType = initialState, action: ActionsTypes): initialStateType => {
    switch (action.type) {
        case ADD_POST: {//функция для создания нового поста
            const newPost: postType = {                                        //отправляем
                id: new Date().getTime(),
                message: action.messageForNewPost,    //берем его из action ниже
                likesCount: 3
            }
            return {
                ...state,          //делаем копию по правилу иммутабильности!!! исходный объект не может быть изменен
                posts: [...state.posts, newPost] // и глубокую копию массива posts,потому-что поверхн.копия посты не копирует!
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
        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter(p => p.id != action.id)
            }
        }
        case SAVE_PHOTO_SUCCESS: {
            return {...state,
                profile: {...state.profile, photos: action.photos}
            }
        }
        default: {                                      //default line
            return state;
        }
    }
}

//экшн - объект у которого инкапсулированы все данные чтобы редьюсер получил этот экшн и применил на свой стейт
export const addPostAC = (messageForNewPost: string) => {
    return {type: ADD_POST, messageForNewPost} as const
}
export const setUserProfileAC = (profile: ProfileType) => {
    return {type: SET_USER_PROFILE, profile} as const
}
export const setStatusAC = (status: string) => {
    return {type: SET_STATUS, status} as const
}
export const deletePost = (id: number) => {
    return {type: DELETE_POST, id} as const
}
export const savePhotoSuccess = (photos: PhotoType) => {
    return {type: SAVE_PHOTO_SUCCESS, photos} as const
}
//thunk
export const getUserProfile = (userId: number) => async (dispatch: Dispatch<ActionsTypes>) => {
    debugger
    let response = await usersAPI.getProfile(userId)
    dispatch(setUserProfileAC(response.data)); //берем наш объект profile и сетаем его в редьюсер
}  //диспатчим экшн, что приводит к изменениям в редьюсере стейта

export const getStatus = (userId: string) => async (dispatch: Dispatch<ActionsTypes>) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatusAC(response.data))
}
export const updateStatus = (status: string) => async (dispatch: Dispatch<ActionsTypes>) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatusAC(status))
    }
}
//в response результат - чем зарезолвится промис

export const savePhoto = (file: File) => async (dispatch: Dispatch<ActionsTypes>) => {
    let response = await profileAPI.savePhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos))
    }
}
export const saveProfile = (profile: ProfileType) => async (dispatch:any, getState:any) => {
    let userID = getState().auth.id
    let data = await profileAPI.saveProfile(profile);
    if (data.resultCode === 0) {
        dispatch(getUserProfile(userID as number))
    } else {
        dispatch(setAppError(data.messages[0]))
    }
    return
}

