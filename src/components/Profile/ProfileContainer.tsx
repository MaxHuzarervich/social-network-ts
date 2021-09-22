import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getUserProfile, ProfileType} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


export type PathParamsType = {             //типизация того что после params
    userId: string
}

export type MapStateToPropsType = {
    profile: ProfileType
}

export type MapDispatchToPropsType = {
    getUserProfile: (userId: string) => void
}

export type OwnPropsType = MapStateToPropsType & MapDispatchToPropsType

export type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

//всё (пропсы), что приходит в контейнерную компоненту мы обязаны передать в презентационную

export class ProfileContainer extends React.Component <PropsType> {
    componentDidMount() {

        let userId = this.props.match.params.userId;

        if (!userId) {
            userId = '2'
        }
        this.props.getUserProfile(userId);
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
export default withAuthRedirect(connect(MapStateToProps, {getUserProfile})(WithUrlDataContainerComponent))

// export const ProfileContainerS: ConnectedComponent<typeof AuthRedirectComponent,any>
//     = connect<MapStateToPropsType, MapDispatchToPropsType, OwnPropsType, AppStateType>(
//     MapStateToProps, {getUserProfile}
// )(WithUrlDataContainerComponent)

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer) //снабдили ProfileContainer редиректом
