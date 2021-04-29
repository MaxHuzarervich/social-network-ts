let onChange = () => {
    console.log('Hello')
}

export const subscribe = (callback: () => void) => {
    debugger
    onChange = callback;
}

export type postsType = {
    id: number,
    message: string,
    count: number
}
export type dialogsType = {
    id: number,
    name: string
}
export type messagesType = {
    id: number,
    message: string,
}
export type messagesPageType = {
    messages: Array<messagesType>
    dialogs: Array<dialogsType>
}
export type profilePageType = {
    posts: Array<postsType>,
    messageForNewPost: string
}
export type appStateType = {
    profilePage: profilePageType,
    dialogsPage: messagesPageType
}
let state: appStateType = {
    profilePage: {
        messageForNewPost: '',
        posts: [
            {id: 1, message: 'Hi, how are you?', count: 15},
            {id: 2, message: 'My first post', count: 20},
            {id: 3, message: 'Blabla', count: 11},
            {id: 4, message: 'Dada', count: 12}
        ]
    },
    dialogsPage: {
        messages: [
            {id: 1, message: 'hi'},
            {id: 2, message: 'How is your it-kamasutra?'},
            {id: 3, message: 'Yo'},
            {id: 4, message: 'Yo'},
            {id: 5, message: 'Yo'}
        ],
        dialogs: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Svetlana'},
            {id: 4, name: 'Sasha'},
            {id: 5, name: 'Victor'},
            {id: 6, name: 'Valera'}
        ]
    }

}

export const changeNewText = (newText: string) => {
    state.profilePage.messageForNewPost = newText;
    onChange();
}

export const addPost = (postText: string) => {
    debugger;                 //функция для создания нового поста
    const newPost: postsType = {
        id: new Date().getTime(),
        message: postText,
        count: 0
    }
    state.profilePage.posts.push(newPost);
    onChange();
}

export default state;