import state, {messagesType, postsType} from "./state";

export const dialogsReducer = (state, action) => {
    if (action.type === 'SEND-MESSAGE') {
        let bodyMessage: messagesType = {                                  //отправляем
            id: new Date().getTime(),
            message: action.bodyText
        }
        state.messages.push(bodyMessage);          //dialogsPage приходит в state
        state.newMessageBody = '';
    } else if (action.type === 'UPDATE-NEW-MESSAGE-BODY') {//впечатываем
        state.newMessageBody = action.body;       //dialogsPage приходит в state
    }

    return state;
}