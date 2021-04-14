import React from 'react';
import s from './Profile.module.css';
import Posts, {PostsType} from "./Mypost/Posts";
import ProfileInfo from './ProfileInfo/ProfileInfo';


function Profile(props:PostsType) {

    return <div>
        <ProfileInfo/>
        <Posts posts={props.posts}/>
    </div>
}

export default Profile;