import React, {useState} from 'react';
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
    goToEditMode: () => void
}

function ProfileInfo(props: ProfileInfoType) {

    const [editMode, setEditMode] = useState(false)

    if (!props.profile.userId) {
        return <Preloader/>
    }

    return (<div>
            <div>
                <img className={s.avatar} src={props.profile.photos.large || userPhoto} alt={'photo'}/>
                {props.isOwner && <div>
                    <button onClick={props.goToEditMode}>Edit</button>
                </div>}
            </div>
            <div>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            </div>
            <div>
                {editMode ? <ProfileDataForm/> : <ProfileData/>}
            </div>
        </div>
    )

}

const ProfileData = (props: any) => {

    const onMainSelected = (e: any) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }


    return <div>
        <div className={s.descriptionBlock}>
            {props.isOwner && <input type={'file'} onChange={onMainSelected}/>}
            <div>
                <div>
                    <b>Full name</b>: {props.profile.fullName}
                </div>
                <div>
                    <b>Looking for a job</b>: {props.profile.lookingForAJob ? 'Yes' : 'No'}
                </div>
                {props.profile.lookingForAJobDescription &&
                <div>
                    <b>My professional skills</b>: {props.profile.lookingForAJobDescription}
                </div>}
                <div>
                    <b>Contacts</b>: {Object.keys(props.profile.contacts).map(key => {
                    return <ContactsProfile key={key} contactTitle={key} contactValue={props.profile.contacts[key]}/>
                })}
                </div>
            </div>
        </div>
    </div>
}
const ProfileDataForm = () => {
return <div>

</div>
}

type contactPropsType = {
    contactTitle: string
    contactValue: string
}

const ContactsProfile = ({contactTitle, contactValue}: contactPropsType) => {
    return <div className={s.contact}><b>{contactTitle}</b>:{contactValue}</div>
}

export default ProfileInfo;