import React from 'react';
import Profile from "./Profile";
import {connect, ConnectedComponent} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getUserProfile, ProfileType} from "../../redux/profile-reducer";
import {Redirect, RouteComponentProps, withRouter} from 'react-router-dom';


export type PathParamsType = {             //типизация того что после params
    userId: string
}

export type MapStateToPropsType = {
    profile: ProfileType
    isAuth: boolean
}

export type MapDispatchToPropsType = {
    // setUserProfile: (profile: ProfileType) => void
    getUserProfile: (userId:string) => void
}

export type OwnPropsType = MapStateToPropsType & MapDispatchToPropsType

export type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

//всё (пропсы), что приходит в контейнерную компоненту мы обязаны передать в презентационную

class ProfileContainer extends React.Component <PropsType> {
    componentDidMount() {

        let userId = this.props.match.params.userId;

        if (!userId) {
            userId = '2'
        }
        this.props.getUserProfile(userId);
    }

    render() {
        if(!this.props.isAuth) return <Redirect to={'/login'} /> //если я не залогинен то редирект
        return <Profile {...this.props} profile={this.props.profile}/>
    }
}

//--------------------------------------------------------------------------
export let MapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
})
//--------------------------------------------------------------------------

const WithUrlDataContainerComponent = withRouter(ProfileContainer) //закинет данные в компоненту профайл из url

//--------------------------------------------------------------------------
export const ProfileContainerS: ConnectedComponent<typeof ProfileContainer,
    any> = connect<MapStateToPropsType, MapDispatchToPropsType, OwnPropsType, AppStateType>(
    MapStateToProps, {getUserProfile}
)(WithUrlDataContainerComponent)