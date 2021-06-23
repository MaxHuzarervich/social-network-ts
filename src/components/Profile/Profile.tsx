import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import store, {profileType} from "../../redux/store";
import MyPostsContainer from "./Mypost/MyPostsContainer";


function Profile(props: profileType) {

    return <div>
        <ProfileInfo/>
        <MyPostsContainer

            store={props.store}
            // messageForNewPost={props.profilePage.messageForNewPost}
            // profilePage={props.profilePage}
            // posts={props.profilePage.posts}
            // dispatch={props.dispatch.bind(store)}
        />
    </div>
}

export default Profile;