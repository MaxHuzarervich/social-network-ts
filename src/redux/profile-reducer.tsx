import {postsType} from "./state";

export const profileReducer = (state, action) => {
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