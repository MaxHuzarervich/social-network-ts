import {messagesType} from "./state";

export const dialogsReducer = (state, action) => {
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