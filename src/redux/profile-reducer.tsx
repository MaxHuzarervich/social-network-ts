import {ActionsTypes} from "./redux-store";


export type postsType = {
    id: number,
    message: string,
    likesCount: number
}

export type InitialStateProfileType = {
    posts:Array<postsType>,
    messageForNewPost:string
}

//инициализационный state,который будет инициализировать эту подветку
let initialState:InitialStateProfileType = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 15},
        {id: 2, message: 'My first post', likesCount: 20},
    ],
    messageForNewPost: ''
}
//если сюда не придёт state то state-ом будет initialState
export const profileReducer = (state:InitialStateProfileType = initialState ,action:ActionsTypes):InitialStateProfileType => {
    switch (action.type) {
        case 'ADD-POST': //функция для создания нового поста
            const newPost: postsType = {                                        //отправляем
                id: new Date().getTime(),
                message: action.postText,
                likesCount: 0
            }
            state.posts.push(newPost);   //profilePage приходит в state
            state.messageForNewPost = '';
            return state;
        case 'CHANGE-NEW-TEXT': //впечатываем
            state.messageForNewPost = action.newText;  //profilePage приходит в state
            return state;
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