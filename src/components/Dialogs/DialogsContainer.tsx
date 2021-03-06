import React from 'react';
import {InitialStateDialogsType, sendMessageCreator} from '../../redux/dialogs-reducer';
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

export type MapStateToPropsType = {
    dialogsPage: InitialStateDialogsType,
}
export type MapDispatchToPropsType = {
    sendMessage: (newMessageBody: string) => void
}
export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType

//пропсы для презентационной компоненты Dialogs
let mapStateToProps = (state: AppStateType): MapStateToPropsType => {     //смысл ф-ции превратить часть стейта в пропсы
    return {
        dialogsPage: state.dialogsPage,
    }
}
//двумя ф-циями ниже мы настраиваем наш connect
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        sendMessage: (newMessageBody) => {
            dispatch(sendMessageCreator(newMessageBody))
        }
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)


// const AuthRedirectComponent = withAuthRedirect(Dialogs)

//Создаем контейнерную компоненту при помощи redux

//Мы вызвали ф-цию connect, а она вернула нам другую ф-цию и мы вызываем ту ф-цию которую вернул нам предыдущий вызов
//первым вызовом мы как бы настраиваем нашу контейнерную компоненту
// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent); //как бы законектили
// нашу презентационную компоненту Dialogs к store.
// Отрисовывается компонента Dialogs и в нее засовываются данные из объектов которые возвращаются этими двумя ф-циями.
// Connect возвращает нам новую контейнерную компоненту
// export default DialogsContainer;

//connect use subscribe!!!!!!!