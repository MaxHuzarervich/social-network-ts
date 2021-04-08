import React from 'react';
import s from './Profile.module.css';
import Myposts from "./Mypost/Myposts";
import ProfileInfo from './ProfileInfo/ProfileInfo';


function Profile() {
    return <div>
        <ProfileInfo/>
        <Myposts/>
    </div>
}

export default Profile;