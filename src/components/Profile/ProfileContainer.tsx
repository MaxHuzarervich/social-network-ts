import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getStatus, getUserProfile, ProfileType, savePhoto, updateStatus} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {compose} from "redux";

export type OwnPropsType = MapStateToPropsType & MapDispatchToPropsType

export type PathParamsType = {             //типизация того что после params
    userId: any
}

export type ProfileContainerPropsType = RouteComponentProps<PathParamsType> & OwnPropsType

class ProfileContainer extends React.Component <ProfileContainerPropsType, any> {

    refreshProfile () {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId
            if(!userId){
                this.props.history.push('/login')
            }
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

    componentDidMount(): void {
        this.refreshProfile()
    }
    componentDidUpdate(prevProps: Readonly<ProfileContainerPropsType>, prevState: Readonly<any>, snapshot?: any) {
        if(this.props.match.params.userId != prevProps.match.params.userId)
        this.refreshProfile()
    }

    render() {
        console.log('PROFILE RENDER')
        return (
            <div>
                <Profile {...this.props}
                         savePhoto={this.props.savePhoto}
                         isOwner={!this.props.match.params.userId}
                         profile={this.props.profile}
                         status={this.props.status}
                         updateStatus={this.props.updateStatus}/>
            </div>
        )
    }
}

export type MapStateToPropsType = {
    profile: ProfileType,
    status: string,
    authorizedUserId: number | null,
    isAuth: boolean
}

export type MapDispatchToPropsType = {
    getUserProfile: (userId: string) => void,
    getStatus: (userId: string) => void,
    updateStatus: (status: string) => void,
    savePhoto: (photo: string) => void
}

let MapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.id,
    isAuth: state.auth.isAuth
})

export default compose<React.ComponentType>(
    connect(MapStateToProps, {getUserProfile, getStatus, updateStatus, savePhoto}),
    withRouter,
    // withAuthRedirect
)(ProfileContainer)


// export default withAuthRedirect(withRouter(connect(MapStateToProps,{getUserProfile})
// (ProfileContainer))) //сокращенный вариант того что ниже

// const WithUrlDataContainerComponent = withRouter(ProfileContainer) //закинет данные в компоненту профайл из url
// export default withAuthRedirect(connect(MapStateToProps, {getUserProfile})(WithUrlDataContainerComponent))

// export const ProfileContainerS: ConnectedComponent<typeof AuthRedirectComponent,any>
//     = connect<MapStateToPropsType, MapDispatchToPropsType, OwnPropsType, AppStateType>(
//     MapStateToProps, {getUserProfile}
// )(WithUrlDataContainerComponent)

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer) //снабдили ProfileContainer редиректом
