import {addPostAC, newTextChangeHandlerAC} from "./profile-reducer";
import {sendMessageCreator, updateNewMessageBodyCreator} from "./dialogs-reducer";
import {storeType} from "./store";

export type ProfileType = {
    profilePage: ProfilePageType,
    posts: Array<PostsType>,
    dispatch: (action: ActionsTypes) => void
    store: storeType
}
export type PostsType = {
    id: number,
    message: string,
    likesCount: number
}
export type DialogsType = {
    id: number,
    name: string
}
export type MessagesType = {
    id: number,
    message: string,
}
export type DialogsPageType = {
    messages: Array<MessagesType>
    dialogs: Array<DialogsType>
    newMessageBody: string
}
export type ProfilePageType = {
    posts: Array<PostsType>,
    messageForNewPost: string
}
export type ActionsTypes =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof newTextChangeHandlerAC>
    | ReturnType<typeof updateNewMessageBodyCreator>
    | ReturnType<typeof sendMessageCreator>