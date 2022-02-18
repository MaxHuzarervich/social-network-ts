import React, {ChangeEvent, useState} from 'react';
import s from './ProfileInfo.module.css';
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";
import userPhoto from '../../../assets/images/ava.jpg'
import {ProfileType, saveProfile} from "../../../redux/profile-reducer";
import {ProfileDataForm} from "./ProfileDataForm";

type ProfileInfoType = {
    profile: ProfileType,
    status: string,
    updateStatus: (status: string) => void,
    isOwner: boolean,
    getStatus: (userId: string) => void,
    savePhoto: (photo: File) => void,
    saveProfile: (value: ProfileType) => void
}

export function ProfileInfo(props: ProfileInfoType) {

    const [editMode, setEditMode] = useState(false)

    if (!props.profile.userId) {
        return <Preloader/>
    }
    const onMainSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (value: ProfileType) => {
        saveProfile(value)
        setEditMode(false)
    }

    return (<div>
            <div>
                <img className={s.avatar} src={props.profile.photos.large || userPhoto} alt={'photo'}/>
                {props.isOwner && <input type={'file'} onChange={onMainSelected}/>}
            </div>
            <div>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            </div>
            <div>
                {editMode ? <ProfileDataForm profile={props.profile} onSubmit={onSubmit}/> :
                    <ProfileData profile={props.profile} isOwner={props.isOwner} goToEditMode={() => {
                        setEditMode(true)
                    }}
                    />
                }
            </div>
        </div>
    )

}

type ProfileDataType = {
    profile: ProfileType
    isOwner: boolean
    goToEditMode: () => void
}

export const ProfileData = (props: ProfileDataType) => {
    return <div>
        <div className={s.descriptionBlock}>
            {props.isOwner && <div>
                <button onClick={props.goToEditMode}>Edit</button>
            </div>}
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
                    return <ContactsProfile key={key} contactTitle={key}
                        // @ts-ignore
                                            contactValue={props.profile.contacts[key as keyof contactPropsType]}/>
                })}
                </div>
                <div>
                    <b>About me for :</b>
                    <span>{props.profile.aboutMe}</span>
                </div>
            </div>
        </div>
    </div>
}

type contactPropsType = {
    contactTitle: string
    contactValue?: string
}

const ContactsProfile = ({contactTitle, contactValue}: contactPropsType) => {
    return <div className={s.contact}><b>{contactTitle}</b>:{contactValue}</div>
}
