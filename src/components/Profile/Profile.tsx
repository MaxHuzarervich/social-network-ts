import React from 'react';
import MyPosts from "./Mypost/Posts";
import ProfileInfo from './ProfileInfo/ProfileInfo';
import store, {profileType} from "../../redux/state";


function Profile(props: profileType) {
    debugger
    return <div>
        <ProfileInfo/>
        <MyPosts profilePage={props.profilePage}
                 addPostCallback={store.addPost.bind(store)}
                 posts={props.profilePage.posts}
                 message={store._state.profilePage.messageForNewPost}
                 changeNewTextCallback={store.changeNewText.bind(store)}
                 dispatch = {store.dispatch.bind(store)}
        />
    </div>
}

export default Profile;