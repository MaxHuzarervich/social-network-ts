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
}
//если сюда не придёт state то state-ом будет initialState
export const dialogsReducer = (state: InitialStateDialogsType = initialState, action: ActionsTypes): InitialStateDialogsType => {

    switch (action.type) {
        case 'SEND-MESSAGE':
            // let bodyMessage: MessagesType = {
                //     id: new Date().getTime(),
                //     message: action.newMessageBody
                // }
            let bodyMessage = action.newMessageBody
            return  {...state,
            messages: [...state.messages, {id:6, message:bodyMessage}]} //все элементы из старого messages а справа еще один элемент
        default:                                      //default line
            return state;
    }
}
export const sendMessageCreator =
    (newMessageBody: string) => {
        return {
            type: 'SEND-MESSAGE',
            newMessageBody
        } as const
    }