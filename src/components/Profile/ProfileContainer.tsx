import React, {ComponentType} from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect, ConnectedComponent} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {ProfileType, setUserProfileAC} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter } from 'react-router-dom';


export type PathParamsType = {             //типизация того что после params
    userId: string
}

export type MapStateToPropsType = {
    profile: ProfileType
}

export type MapDispatchToPropsType = {
    setUserProfile: (profile: ProfileType) => void
}

export type OwnPropsType = MapStateToPropsType & MapDispatchToPropsType

export type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

//всё (пропсы), что приходит в контейнерную компоненту мы обязаны передать в презентационную

class ProfileContainer extends React.Component <PropsType> {
    componentDidMount() {

        let userId = this.props.match.params.userId;

        if(!userId){
            userId = '2'
        }

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUserProfile(response.data); //берем наш объект profile и сетаем его в редьюсер
            })
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile}/>
    }
}

//--------------------------------------------------------------------------
export let MapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile
})
//--------------------------------------------------------------------------

const WithUrlDataContainerComponent = withRouter(ProfileContainer) //закинет данные в компоненту профайл из url

//--------------------------------------------------------------------------
export const ProfileContainerS:  ConnectedComponent<typeof ProfileContainer, any> = connect<MapStateToPropsType, MapDispatchToPropsType, OwnPropsType, AppStateType>(
    MapStateToProps, {setUserProfile: setUserProfileAC}
    )(WithUrlDataContainerComponent)