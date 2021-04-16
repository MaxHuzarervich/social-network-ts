import React from 'react';
import s from './Profile.module.css';
import Posts from "./Mypost/Posts";
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {profilePageType} from "../../redux/state";

type profileType = {
    profilePage: profilePageType
}

function Profile(props:profileType) {

    return <div>
        <ProfileInfo/>
        <Posts profilePage={props.profilePage}/>
    </div>
}

export default Profile;