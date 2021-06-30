import {storeType} from "./store";
import {ChangeEvent} from "react";
import {ActionsTypes, PostsType, ProfilePageType} from "./types";

export type profilePropsType = {
    profilePage: ProfilePageType,
    posts: Array<PostsType>,
    dispatch: (action: ActionsTypes) => void,
    messageForNewPost: string,
    addPost:()=>void
    updateNewPostText:(e: ChangeEvent <HTMLTextAreaElement>) => void
    store:storeType
}
//инициализационный state,который будет инициализировать эту подветку
let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 15},
        {id: 2, message: 'My first post', likesCount: 20},
    ],
    messageForNewPost: 'social-network'
}
//если сюда не придёт state то state-ом будет initialState
export const profileReducer = (state:ProfilePageType = initialState , action:ActionsTypes) => {
    switch (action.type) {
        case 'ADD-POST': //функция для создания нового поста
            const newPost: PostsType = {                                        //отправляем
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