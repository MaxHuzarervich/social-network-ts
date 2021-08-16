import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from "./Mypost/MyPostsContainer";
import {PropsType} from "./ProfileContainer";

function Profile(props: PropsType) {
    return <div>
        <ProfileInfo setUserProfile={props.setUserProfile} profile = {props.profile} />
        <MyPostsContainer />
    </div>
}

export default Profile;