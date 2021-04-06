import React from 'react';
import s from './Profile.module.css';
import Myposts from "./Mypost/Myposts";
function Profile(){
    return <div className = {s.content}>
        <div><img
            src='https://p4.wallpaperbetter.com/wallpaper/728/935/618/city-the-city-usa-los-angeles-wallpaper-preview.jpg'/>
        </div>
        <div>ava + description</div>
        <Myposts />
    </div>
}
export default  Profile;