import React from 'react';
import Posts from "./Mypost/Posts";
import ProfileInfo from './ProfileInfo/ProfileInfo';
import store, {profileType} from "../../redux/state";


function Profile(props: profileType) {
    return <div>
        <ProfileInfo/>
        <Posts profilePage={props.profilePage}
               addPostCallback={store.addPost.bind(store)}
               posts={props.profilePage.posts}
               message={store._state.profilePage.messageForNewPost}
               changeNewTextCallback={store.changeNewText.bind(store)}
        />
    </div>
}

export default Profile;