import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from "./Mypost/MyPostsContainer";


function Profile() {
    return <div>
        <ProfileInfo/>
        <MyPostsContainer />
    </div>
}

export default Profile;