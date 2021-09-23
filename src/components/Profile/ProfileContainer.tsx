import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getUserProfile, ProfileType} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

export type OwnPropsType = MapStateToPropsType & MapDispatchToPropsType

export type PathParamsType = {             //типизация того что после params
    userId: string
}

export type ProfileContainerPropsType = RouteComponentProps<PathParamsType> & OwnPropsType

class ProfileContainer extends React.Component <ProfileContainerPropsType> {
    componentDidMount(): void {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = '2323'
        }
        this.props.getUserProfile(userId);
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }
}

export type MapStateToPropsType = {
    profile: ProfileType
}

export type MapDispatchToPropsType = {
    getUserProfile: (userId: string) => void
}

let MapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile
})

export default compose<React.ComponentType>(
    connect(MapStateToProps, {getUserProfile}),
    withRouter,
    withAuthRedirect
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
