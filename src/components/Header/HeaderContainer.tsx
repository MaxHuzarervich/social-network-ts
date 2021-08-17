import React from 'react';
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {dataType, setAuthUserData} from "../../redux/auth-reducer";

export type MapStateToPropsType = {
    data: dataType
    isAuth: boolean
}
export type MapDispatchToPropsType = {
    setAuthUserData: (data: dataType) => void
}

export type headerContainerPropsType = MapStateToPropsType & MapDispatchToPropsType


class HeaderContainer extends React.Component <headerContainerPropsType, any> {
    componentDidMount() {                                                 //2-м параметром передаем объект с настройкам запроса
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        }).then(response => {
            debugger
            if (response.data.resultCode === 0) {
                this.props.setAuthUserData(response.data.data)
            }
        });
    }

    render() {
        // return <Header {...this.props}  />
        return <Header {...this.props}/>
    }
}

const MapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return
    {
        isAuth: state.auth.isAuth; login: state.auth.data.login
    }
}
export default connect(MapStateToProps, {setAuthUserData})(HeaderContainer)