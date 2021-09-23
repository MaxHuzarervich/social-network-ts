import React from 'react';
import s from './ProfileInfo.module.css';
import {OwnPropsType} from "../ProfileContainer";
import {Preloader} from "../../common/Preloader/Preloader";
import { ProfileStatus } from './ProfileStatus';

function ProfileInfo(props: OwnPropsType) {
    if (!props.profile.userId) {
        return <Preloader/>
    }
    return <div>
        <div>
            {/*<img*/}
            {/*    src='https://p4.wallpaperbetter.com/wallpaper/728/935/618/city-the-city-usa-los-angeles-wallpaper-preview.jpg'*/}
            {/*    alt={'photo'}/>*/}
        </div>
        <div className={s.descriptionBlock}>
            <img src={props.profile.photos.large} alt={'photo'}/>
            <ProfileStatus />
        </div>
    </div>
}

export default ProfileInfo;