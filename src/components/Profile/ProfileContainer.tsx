import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {setUserProfileAC} from "../../redux/profile-reducer";


export type MapStateToPropsType = {
    profile: {
        userId: number
        lookingForAJob: boolean
        lookingForAJobDescription: string
        fullName: string
        contacts: {
            github: string
            vk: string
            facebook: string
            instagram: string
            twitter: string
            website: string
            youtube: string
            mainLink: string
        }
        photos: {
            small: string
            large: string
        }
    }
}

export type MapDispatchToPropsType = {
    setUserProfile: (profile: MapStateToPropsType) => void
}

export type PropsType = MapStateToPropsType & MapDispatchToPropsType

//всё (пропсы), что приходит в контейнерную компоненту мы обязаны передать в презентационную

export class ProfileContainer extends React.Component <PropsType, any> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data);
                debugger
            })
    }

    render() {
        return <Profile  profile={this.props.profile} setUserProfile={this.props.setUserProfile}/>
    }
}

//--------------------------------------------------------------------------
let MapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile
})
//--------------------------------------------------------------------------
export default connect(MapStateToProps, {setUserProfile: setUserProfileAC})(ProfileContainer)