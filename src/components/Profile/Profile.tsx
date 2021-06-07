import React from 'react';
import MyPosts from "./Mypost/Posts";
import ProfileInfo from './ProfileInfo/ProfileInfo';
import store, {profileType} from "../../redux/state";


function Profile(props: profileType) {

    return <div>
        <ProfileInfo/>
        <MyPosts
            posts={props.profilePage.posts}
            dispatch={store.dispatch.bind(store)}
            message={store._state.profilePage.messageForNewPost}/>
    </div>
}

export default Profile;