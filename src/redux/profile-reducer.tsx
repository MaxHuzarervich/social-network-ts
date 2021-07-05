import {ActionsTypes} from "./redux-store";

export type postType = {
    id: number,
    message: string,
    likesCount: number
}

export type initialStateType = {
    posts: Array<postType>
    messageForNewPost: string
}


//инициализационный state,который будет инициализировать эту подветку
let initialState: initialStateType = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 15},
        {id: 2, message: 'My first post', likesCount: 20},
    ],
    messageForNewPost: ''
}
//если сюда не придёт state то state-ом будет initialState
export const profileReducer = (state: initialStateType = initialState, action: ActionsTypes): initialStateType => {
    switch (action.type) {
        case 'ADD-POST': {//функция для создания нового поста
            const newPost: postType = {                                        //отправляем
                id: new Date().getTime(),
                message: action.postText,
                likesCount: 0
            };
            return  {
                ...state,          //делаем копию по правилу иммутабильности!!! исходный объект не может быть изменен
                posts: [...state.posts, newPost], // и глубокую копию массива posts,потому-что поверхн.копия посты не копирует!
                messageForNewPost: ''
            };
        }
        case'CHANGE-NEW-TEXT': {//впечатываем
            return {
                ...state,//делаем копию по правилу иммутабильности!!! исходный объект не может быть изменен
                messageForNewPost: action.newText
            }
        }
        default:                                       //default line
            return state;
    }
}
export const addPostAC =
    (postText: string) => {
        return {
            type: 'ADD-POST',
            postText: postText
        } as const
    }
export const newTextChangeHandlerAC =
    (newText: string) => {
        return {
            type: 'CHANGE-NEW-TEXT',
            newText: newText
        } as const
    }