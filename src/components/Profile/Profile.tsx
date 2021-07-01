import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from "./Mypost/MyPostsContainer";
import {AppStoreType} from "../../redux/redux-store";

type ProfilePropsType = {
    store: AppStoreType
}

export function Profile(props: ProfilePropsType) {

    return <div>
        <ProfileInfo/>
        <MyPostsContainer />
    </div>
}

export default Profile;