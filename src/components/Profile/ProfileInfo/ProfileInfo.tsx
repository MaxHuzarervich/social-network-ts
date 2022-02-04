import React from 'react';
import s from './ProfileInfo.module.css';
import {OwnPropsType} from "../ProfileContainer";
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";

function ProfileInfo({profile, status, updateStatus}:OwnPropsType) {
    if (!profile.userId) {
        return <Preloader/>
    }
    return <div>
        <div className={s.descriptionBlock}>
            <img src={profile.photos.large}  alt='photo'/>
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
        </div>
    </div>
}

export default ProfileInfo;