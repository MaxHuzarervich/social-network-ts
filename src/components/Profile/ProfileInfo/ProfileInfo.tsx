import React from 'react';
import s from './ProfileInfo.module.css';
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";
import userPhoto from '../../../assets/images/ava.jpg'
import {ProfileType} from "../../../redux/profile-reducer";

type ProfileInfoType = {
    profile: ProfileType,
    status: string,
    updateStatus: (status: string) => void,
    isOwner: boolean,
    getStatus: (userId: string) => void,
    getUserProfile: (userId: string) => void,
    isAuth: boolean,
    authorizedUserId: number | null
    savePhoto: (photo: string) => void
}

function ProfileInfo({profile, status, updateStatus, isOwner, savePhoto}:ProfileInfoType) {
    if (!profile.userId) {
        return <Preloader/>
    }

    const onMainSelected = (e:any) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    return <div>
        <div className={s.descriptionBlock}>
            <img className={s.avatar} src={profile.photos.large || userPhoto}  alt={'photo'}/>
            {isOwner && <input type={'file'} onChange={onMainSelected}/>}
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
        </div>
    </div>
}

export default ProfileInfo;