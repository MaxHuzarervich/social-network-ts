import {ActionsTypes, dialogsPageType, messagesType} from "./store";

export type dialogsPropsType = {
    dialogsPage: dialogsPageType;
    dispatch: (action: ActionsTypes) => void
    newMessageBody: string
}

export const dialogsReducer = (state:dialogsPageType, action:ActionsTypes) => {
    switch (action.type) {
        case 'SEND-MESSAGE':
            let bodyMessage: messagesType = {                                  //отправляем
                id: new Date().getTime(),
                message: action.bodyText
            }
            state.messages.push(bodyMessage);          //dialogsPage приходит в state
            state.newMessageBody = '';
            return state;
        case 'UPDATE-NEW-MESSAGE-BODY': //впечатываем
            state.newMessageBody = action.body;       //dialogsPage приходит в state
            return state;
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