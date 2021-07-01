import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {postsType, profilePageType, storeType} from "../../redux/store";
import MyPostsContainer from "./Mypost/MyPostsContainer";

type ProfilePropsType = {
    store: storeType;
    profilePage: profilePageType,
    posts: Array<postsType>,
}

function Profile(props: ProfilePropsType) {
    return <div>
        <ProfileInfo/>
        <MyPostsContainer
            store={props.store}
            messageForNewPost={props.profilePage.messageForNewPost}/>
    </div>
}

export default Profile;