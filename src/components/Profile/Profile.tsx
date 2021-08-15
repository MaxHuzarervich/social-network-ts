import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from "./Mypost/MyPostsContainer";
import {PropsType} from "./ProfileContainer";


function Profile(props: PropsType) {
    return <div>
        <ProfileInfo profile = {props.profile} />
        <MyPostsContainer />
    </div>
}

export default Profile;