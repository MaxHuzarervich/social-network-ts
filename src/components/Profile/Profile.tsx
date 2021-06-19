import React from 'react';
import MyPosts from "./Mypost/MyPosts";
import ProfileInfo from './ProfileInfo/ProfileInfo';
import store, {profileType} from "../../redux/state";


function Profile(props: profileType) {

    return <div>
        <ProfileInfo/>
        <MyPosts
            messageForNewPost={props.profilePage.messageForNewPost}
            profilePage={props.profilePage}
            posts={props.profilePage.posts}
            dispatch={props.dispatch.bind(store)}
        />
    </div>
}

export default Profile;