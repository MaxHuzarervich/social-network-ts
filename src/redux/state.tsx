export type AppPropsType = {
    store: storeType,
    dispatch: (action: ActionsTypes) => void
}

export type profileType = {
    profilePage: profilePageType,
    posts: Array<postsType>,
    dispatch: (action: ActionsTypes) => void
}

export type profilePropsType = {
    profilePage: profilePageType,
    posts: Array<postsType>,
    dispatch: (action: ActionsTypes) => void,
    messageForNewPost: string
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
    newMessageBody: string

}
export type profilePageType = {
    posts: Array<postsType>,
    messageForNewPost: string
}

export type rootStateType = {
    profilePage: profilePageType,
    dialogsPage: dialogsPageType
}

export type ActionsTypes =
    ReturnType<typeof addPostAC> | ReturnType<typeof newTextChangeHandlerAC> | ReturnType<typeof updateNewMessageBodyCreator>

export type storeType = {
    _state: rootStateType,
    _callSubscriber: () => void,
    subscribe: (observer: () => void) => void,
    getState: () => rootStateType,
    dispatch: (action: ActionsTypes) => void
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
export const updateNewMessageBodyCreator =
    (body: string) => {
        return {
            type: 'UPDATE-NEW-MESSAGE-BODY',
            body: body
        }
    }
export const sendMessageCreator = (bodyText: string) => {
    return {
        type: 'SEND-MESSAGE',
        bodyText:bodyText
    }
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
            ],
            newMessageBody: ''
        }

    },
    _callSubscriber() {                                //всё что с нижним подчеркиванием используем внутри
        console.log('state changed!')
    },
//-------------------------------------------------------------------
    subscribe(observer) {                             //subscribe,getState не меняют на state
        this._callSubscriber = observer;
    },
    getState() {
        return this._state;
    },
//-------------------------------------------------------------------
    dispatch(action: ActionsTypes) {

        if (action.type === 'ADD-POST') {
            //функция для создания нового поста
            const newPost: postsType = {
                id: new Date().getTime(),
                message: action.postText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost);
            this._callSubscriber();
        } else if (action.type === 'CHANGE-NEW-TEXT') {
            this._state.profilePage.messageForNewPost = action.newText;
            this._callSubscriber();
            //--------------------------------------------------------------dialogs
        }else if (action.type === 'SEND-MESSAGE') {
            let bodyMessage: messagesType = {
                id: new Date().getTime(),
                message: action.bodyText
            }
            this._state.dialogsPage.messages.push(bodyMessage);
            this._callSubscriber();
        }
        else if (action.type === 'UPDATE-NEW-MESSAGE-BODY') {
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber();
        }
    }
}

export default store;
