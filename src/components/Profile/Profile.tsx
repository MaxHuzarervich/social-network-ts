import React from 'react';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import MyPostsContainer from "./Mypost/MyPostsContainer";
import {ProfileType} from "../../redux/profile-reducer";

type ProfilePropsType = {
    profile: ProfileType,
    status: string,
    updateStatus: (status: string) => void,
    savePhoto: (photo: File) => void,
    isOwner: boolean,
    getStatus: (userId: string) => void,
    saveProfile: (profile: ProfileType) => void
}

export function Profile(props: ProfilePropsType) {
    return <div>
        <ProfileInfo
            saveProfile={props.saveProfile}
            profile={props.profile}
            savePhoto={props.savePhoto}
            isOwner={props.isOwner}
            updateStatus={props.updateStatus}
            status={props.status}
            getStatus={props.getStatus}
            />
        <MyPostsContainer/>
    </div>
}