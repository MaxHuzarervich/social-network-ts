import React from 'react';
import s from './ProfileInfo.module.css';
import {OwnPropsType} from "../ProfileContainer";
import {Preloader} from "../../common/Preloader/Preloader";


function ProfileInfo(props: OwnPropsType) {
    if(!props.profile){
        return <Preloader />
    }

    return <div>
        <div>
            <img
                src='https://p4.wallpaperbetter.com/wallpaper/728/935/618/city-the-city-usa-los-angeles-wallpaper-preview.jpg'
                alt = {'photo'}/>
        </div>
        <div className={s.descriptionBlock}>
            <img src={props.profile.photos.large} alt={'photo'}/>
            ava + description
        </div>
    </div>
}

export default ProfileInfo;