import React, {ChangeEvent} from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/dialogs-reducer';
import Dialogs from "./Dialogs";
import {dialogsPageType, storeType} from "../../redux/store";
import {connect} from "react-redux";


type DialogsContainerPropsType = {
    newMessageBody: string;
    store: storeType;
    dialogsPage: dialogsPageType
}

//пропсы для презентационной компоненты Dialogs
let mapStateToProps = (state) => {             //смысл ф-ции превратить часть стейта в пропсы
    return {
        dialogsPage: state.dialogsPage
    }
}
//двумя ф-циями ниже мы настраиваем наш connect
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (e: ChangeEvent<HTMLTextAreaElement>) => {
            dispatch(updateNewMessageBodyCreator(e.currentTarget.value))
        },
        sendMessage: (props: DialogsContainerPropsType) => {
            dispatch(sendMessageCreator(props.newMessageBody))
        }
    }
}

//Создаем контейнерную компоненту при помощи redux

//Мы вызвали ф-цию connect, а она вернула нам другую ф-цию и мы вызываем ту ф-цию которую вернул нам предыдущий вызов
//первым вызовом мы как бы настраиваем нашу контейнерную компоненту
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs); //как бы законектили
// нашу презентационную компоненту Dialogs к store.
// Отрисовывается компонента Dialogs и в нее засовываются данные из объектов которые возвращаются этими двумя ф-циями.
// Connect возвращает нам новую контейнерную компоненту
export default DialogsContainer;