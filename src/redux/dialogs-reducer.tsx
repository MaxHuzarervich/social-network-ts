import {ActionsTypes} from "./redux-store";

export type NamesType = {
    id: number,
    name: string
}

export type MessagesType = {
    id: number,
    message: string,
}

export type InitialStateDialogsType = {
    messages: Array<MessagesType>
    dialogs: Array<NamesType>
    newMessageBody: string
}

const initialState: InitialStateDialogsType = {
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
//если сюда не придёт state то state-ом будет initialState
export const dialogsReducer = (state: InitialStateDialogsType = initialState, action: ActionsTypes): InitialStateDialogsType => {

    switch (action.type) {
        case 'SEND-MESSAGE':
            let bodyMessage: MessagesType = {                                  //отправляем
                id: new Date().getTime(),
                message: action.bodyText
            }
            return  {...state,
            newMessageBody:'',
            messages: [...state.messages, bodyMessage]} //все элементы из старого messages а справа еще один элемент
        case 'UPDATE-NEW-MESSAGE-BODY': //впечатываем
            return  {...state,
                newMessageBody: action.body};   //newMessageBody перезатираем
        default:                                      //default line
            return state;
    }
}
export const updateNewMessageBodyCreator =
    (body: string) => {
        return {
            type: 'UPDATE-NEW-MESSAGE-BODY',
            body: body
        } as const
    }
export const sendMessageCreator =
    (bodyText: string) => {
        return {
            type: 'SEND-MESSAGE',
            bodyText: bodyText
        } as const
    }