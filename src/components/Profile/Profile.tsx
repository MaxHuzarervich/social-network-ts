import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {profileType} from "../../redux/store";
import MyPostsContainer from "./Mypost/MyPostsContainer";


export function Profile(props: profileType) {

    return <div>
        <ProfileInfo/>
        <MyPostsContainer
            updateNewPostText={}
            addPost={}
            store={props.store}
            messageForNewPost={props.profilePage.messageForNewPost}
            profilePage={props.profilePage}
            posts={props.profilePage.posts}
            dispatch={props.dispatch.bind(props.store)}
        />
    </div>
}

export default Profile;