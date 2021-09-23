import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from "./Mypost/MyPostsContainer";
import {ProfileContainerPropsType} from "./ProfileContainer";

function Profile(props: ProfileContainerPropsType) {
    return <div>
        <ProfileInfo getUserProfile={props.getUserProfile} profile = {props.profile} />
        <MyPostsContainer />
    </div>
}

export default Profile;