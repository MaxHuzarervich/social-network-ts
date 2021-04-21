import React from 'react';
import s from './Profile.module.css';
import Posts from "./Mypost/Posts";
import ProfileInfo from './ProfileInfo/ProfileInfo';
import state, {changeNewText, profilePageType} from "../../redux/state";
import {addPost} from "../../redux/state";

type profileType = {
    profilePage: profilePageType
}

function Profile(props: profileType) {

    return <div>
        <ProfileInfo/>
        <Posts profilePage={props.profilePage}
               addPostCallback={addPost}
               posts={props.profilePage.posts}
               message={state.profilePage.messageForNewPost}
               changeNewTextCallback={changeNewText}
        />
    </div>
}

export default Profile;