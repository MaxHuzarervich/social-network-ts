import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from "./Mypost/MyPostsContainer";
import {ProfileType} from "../../redux/profile-reducer";

type ProfilePropsType = {
    isOwner: boolean,
    updateStatus: (status: string) => void,
    status: string,
    getStatus: (userId: string) => void,
    getUserProfile: (userId: string) => void,
    profile: ProfileType,
    isAuth: boolean,
    authorizedUserId: number | null,
    savePhoto: (photo: string) => void
}

function Profile(props: ProfilePropsType) {
    return <div>
        <ProfileInfo
            savePhoto={props.savePhoto}
            isOwner={props.isOwner}
            updateStatus={props.updateStatus}
            status={props.status}
            getStatus={props.getStatus}
            getUserProfile={props.getUserProfile}
            profile={props.profile}
            isAuth={props.isAuth}
            authorizedUserId={props.authorizedUserId}/>
        <MyPostsContainer/>
    </div>
}

export default Profile;