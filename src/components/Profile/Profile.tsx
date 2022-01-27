import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from "./Mypost/MyPostsContainer";
import {ProfileContainerPropsType} from "./ProfileContainer";

function Profile(props: ProfileContainerPropsType) {
    return <div>
        <ProfileInfo
            updateStatus={props.updateStatus}
            status={props.status}
            getStatus={props.getStatus}
            getUserProfile={props.getUserProfile}
            profile={props.profile}
            isAuth={props.isAuth}
            authorizedUserId={props.authorizedUserId}/>
        <MyPostsContainer/>
    </div>
}

export default Profile;