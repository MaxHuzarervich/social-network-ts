import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getAuthUserData} from "../../redux/auth-reducer";

export type headerContainerPropsType = MapStateToPropsType & MapDispatchToPropsType

class HeaderContainer extends React.Component <headerContainerPropsType, any> {
    componentDidMount() {                                                 //2-м параметром передаем объект с настройкам запроса
        this.props.getAuthUserData() //получает пользовательские авторизационные данные
    }

    render() {
        return <Header {...this.props}/>
    }
}

export type MapStateToPropsType = {
    login: string | null
    isAuth: boolean
}
export type MapDispatchToPropsType = {
    getAuthUserData: () => void
}

const MapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(MapStateToProps, {getAuthUserData})(HeaderContainer)