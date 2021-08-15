import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {setUserProfileAC} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter } from 'react-router-dom';


export type PathParamsType = {             //типизация того что после params
    userId: string
}

export type MapStateToPropsType = {
    profile: any
        // {
    //     userId: number
    //     lookingForAJob: boolean
    //     lookingForAJobDescription: string
    //     fullName: string
    //     contacts: {
    //         github: string
    //         vk: string
    //         facebook: string
    //         instagram: string
    //         twitter: string
    //         website: string
    //         youtube: string
    //         mainLink: string
    //     }
    //     photos: {
    //         small: string
    //         large: string
    //     }
    // }
}

export type MapDispatchToPropsType = {
    setUserProfile: (profile: any) => void
}

export type OwnPropsType = MapStateToPropsType & MapDispatchToPropsType

export type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

//всё (пропсы), что приходит в контейнерную компоненту мы обязаны передать в презентационную

export class ProfileContainer extends React.Component <PropsType, any> {

    componentDidMount() {

        let userId = this.props.match.params.userId;

        if(!userId){
            userId = '2'
        }

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUserProfile(response.data); //берем наш объект profile и сетаем его в редьюсер
                debugger
            })
    }

    render() {
        return <Profile  profile={this.props.profile} setUserProfile={this.props.setUserProfile}/>
    }
}

//--------------------------------------------------------------------------
export let MapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile
})
//--------------------------------------------------------------------------

let WithUrlDataContainerComponent = withRouter(ProfileContainer) //закинет данные в компоненту профайл из url

//--------------------------------------------------------------------------
export default connect(MapStateToProps, {setUserProfile: setUserProfileAC})(ProfileContainer)