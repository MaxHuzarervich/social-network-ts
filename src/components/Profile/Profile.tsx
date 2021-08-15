import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from "./Mypost/MyPostsContainer";
import {OwnPropsType} from "./ProfileContainer";


function Profile(props: OwnPropsType) {
    return <div>
        <ProfileInfo profile = {props.profile} />
        <MyPostsContainer />
    </div>
}

export default Profile;