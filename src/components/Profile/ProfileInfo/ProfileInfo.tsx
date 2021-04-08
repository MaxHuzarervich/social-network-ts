import React from 'react';
import s from './ProfileInfo.module.css';


function ProfileInfo() {
    return <div>
        <div>
            <img
                src='https://p4.wallpaperbetter.com/wallpaper/728/935/618/city-the-city-usa-los-angeles-wallpaper-preview.jpg'/>
        </div>
        <div className={s.descriptionBlock}>
            ava + description
        </div>
    </div>
}

export default ProfileInfo;