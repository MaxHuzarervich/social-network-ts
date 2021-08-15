import {ActionsTypes} from "./redux-store";
import {MapStateToPropsType} from "../components/Profile/ProfileContainer";

export type postType = {
    id: number,
    message: string,
    likesCount: number
}

export type initialStateType = {
    posts: Array<postType>
    messageForNewPost: string
    profile: MapStateToPropsType
}

const ADD_POST = 'ADD-POST'
const CHANGE_NEW_TEXT = 'CHANGE-NEW-TEXT'
const SET_USER_PROFILE = 'SET-USER-PROFILE'


//инициализационный state,который будет инициализировать эту подветку
let initialState: initialStateType = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 15},
        {id: 2, message: 'My first post', likesCount: 20},
    ],
    messageForNewPost: 'Social Network',
    profile: null
}
//если сюда не придёт state то state-ом будет initialState

export const profileReducer = (state: initialStateType = initialState, action: ActionsTypes): initialStateType => {
    switch (action.type) {
        case ADD_POST: {//функция для создания нового поста
            const newPost: postType = {                                        //отправляем
                id: new Date().getTime(),
                message: action.postText,
                likesCount: 0
            };
            return {
                ...state,          //делаем копию по правилу иммутабильности!!! исходный объект не может быть изменен
                posts: [...state.posts, newPost], // и глубокую копию массива posts,потому-что поверхн.копия посты не копирует!
                messageForNewPost: ''
            };
        }
        case CHANGE_NEW_TEXT: {//впечатываем
            return {
                ...state,//делаем копию по правилу иммутабильности!!! исходный объект не может быть изменен
                messageForNewPost: action.newText
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
    export const setUserProfileAC = (profile: any) => {
        return {
            type: SET_USER_PROFILE,
            profile: profile
        } as const
    }
//экшн - объект у котрого инкапсулированы все данные чтобы редьюсер получил этот экшн и применил на свой стейт