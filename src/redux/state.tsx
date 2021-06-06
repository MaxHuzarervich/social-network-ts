// let rerenderEntireTree = () => {
//     console.log("let's go!!!")
// }

export type AppPropsType = {
    store: storeType
}

export type profileType = {
    profilePage: profilePageType,
    posts: Array<postsType>,
    addPostCallback: (postText: string) => void,                             //повторяю типы что ниже в profilePropsType
    changeNewTextCallback: (newText: string) => void,                         // чтобы заработал app
    message: string
}

export type profilePropsType = {
    profilePage: profilePageType,
    posts: Array<postsType>,
    addPostCallback: (postText: string) => void,
    changeNewTextCallback: (newText: string) => void,
    message: string,
    dispatch: (action: ActionsTypes) => void
}

export type postsType = {
    id: number,
    message: string,
    likesCount: number
}
export type dialogsType = {
    id: number,
    name: string
}
export type messagesType = {
    id: number,
    message: string,
}

export type dialogsPageType = {
    messages: Array<messagesType>
    dialogs: Array<dialogsType>
}
export type profilePageType = {
    posts: Array<postsType>,
    messageForNewPost: string,
}

export type rootStateType = {
    profilePage: profilePageType,
    dialogsPage: dialogsPageType
}

type addPostActionType = {
    type: 'ADD-POST',
    postText: string
}
type changeNewTextActionType = {
    type: 'CHANGE-NEW-TEXT',
    newText: string
}

export type ActionsTypes = addPostActionType | changeNewTextActionType;


export type storeType = {
    _state: rootStateType,
    changeNewText: (newText: string) => void,
    addPost: (postText: string) => void,
    _callSubscriber: () => void,
    subscribe: (observer: () => void) => void,
    getState: () => rootStateType,
    dispatch: (action: addPostActionType | changeNewTextActionType) => void
}


const store: storeType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 15},
                {id: 2, message: 'My first post', likesCount: 20},
            ],
            messageForNewPost: ''
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

    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },
    getState() {
debugger
        return this._state;
    },
    changeNewText(newText: string) {
        this._state.profilePage.messageForNewPost = newText;
        this._callSubscriber();
    },

    addPost(postText: string) {
        //функция для создания нового поста
        debugger
        const newPost: postsType = {
            id: new Date().getTime(),
            message: postText,
            likesCount: 0
        }
        this._state.profilePage.posts.push(newPost);
        this.getState();
    },
    _callSubscriber() {
        console.log('state changed!')
    },
    dispatch(action: ActionsTypes) {
        if (action.type === 'ADD-POST') {
            //функция для создания нового поста
            const newPost: postsType = {
                id: 5,
                message: this._state.profilePage.messageForNewPost,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.messageForNewPost = '';
            this._callSubscriber();
        } else if (action.type === 'CHANGE-NEW-TEXT') {
            this._state.profilePage.messageForNewPost = action.newText;
        }
        this._callSubscriber();
    }
}

export default store;
