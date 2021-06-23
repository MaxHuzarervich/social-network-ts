import {addPostAC, newTextChangeHandlerAC, profileReducer} from "./profile-reducer";
import {dialogsReducer, sendMessageCreator, updateNewMessageBodyCreator} from "./dialogs-reducer";

export type AppPropsType = {
    store: storeType,
    dispatch: (action: ActionsTypes) => void
}

export type profileType = {
    profilePage: profilePageType,
    posts: Array<postsType>,
    dispatch: (action: ActionsTypes) => void
    store:storeType
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
    ReturnType<typeof addPostAC>
    | ReturnType<typeof newTextChangeHandlerAC>
    | ReturnType<typeof updateNewMessageBodyCreator>
    | ReturnType<typeof sendMessageCreator>

export type storeType = {
    _state: rootStateType,
    _callSubscriber: () => void,
    subscribe: (observer: () => void) => void,     //pattern
    getState: () => rootStateType,
    dispatch: (action: ActionsTypes) => void
}

const store: storeType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 15},
                {id: 2, message: 'My first post', likesCount: 20},
            ],
            messageForNewPost: 'social-network'
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
        },
        // sideBar{}
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
    //каждую
    dispatch(action: ActionsTypes) {
        //отдаем profilePage в reducer с action он его преобразовыает и возвращает новый profilePage
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        //отдаем dialogsPage в reducer с action он его преобразовыает и возвращает новый dialogsPage
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        //уведомили подписчика
        this._callSubscriber();
    }
}

export default store;
