import state, {messagesType, postsType} from "./state";

const profileReducer = (state, action) => {
    if (action.type === 'ADD-POST') {//функция для создания нового поста
        const newPost: postsType = {                                        //отправляем
            id: new Date().getTime(),
            message: action.postText,
            likesCount: 0
        }
        state.posts.push(newPost);   //profilePage приходит в state
        state.messageForNewPost = '';
    } else if (action.type === 'CHANGE-NEW-TEXT') {//впечатываем
        state.messageForNewPost = action.newText;  //profilePage приходит в state
    }

    return state;
}