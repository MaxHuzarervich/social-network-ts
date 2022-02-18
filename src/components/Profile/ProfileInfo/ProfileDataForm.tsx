import React from "react";
import s from "./ProfileInfo.module.css";
import {Button, Checkbox, FormControlLabel, FormGroup} from "@material-ui/core";
import {useFormik} from "formik";


type FormikErrorType = {
    fullName?: string
    lookingForAJobDescription?: string
    aboutMe?: string
}


export const ProfileDataForm = (props: any) => {


    const formik = useFormik({
        initialValues: {
            fullName: props.profile.fullName,
            lookingForAJob: props.profile.lookingForAJob,
            lookingForAJobDescription: props.profile.lookingForAJobDescription,
            aboutMe: props.profile.aboutMe,
            contacts: {
                facebook: props.profile.contacts.facebook,
                website: props.profile.contacts.website,
                vk: props.profile.contacts.vk,
                twitter: props.profile.contacts.twitter,
                instagram: props.profile.contacts.instagram,
                youtube: props.profile.contacts.youtube,
                github: props.profile.contacts.github,
                mainLink: props.profile.contacts.mainLink,
            }

        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.fullName || !values.lookingForAJobDescription || !values.aboutMe) {
                errors.fullName = 'Required field';
            }
            return errors;
        },
        onSubmit: (values) => {
            props.onSubmit(values)
        },
    });
    return (
        <>
            <div>
                <form onSubmit={formik.handleSubmit}>
                    <FormGroup>
                        <div>
                            <div style={{display: "flex", flexDirection: "column", width: "40%"}}>
                                <b>Full name:</b> <input id={"fullName"} placeholder={"Full name"}
                                                         {...formik.getFieldProps("fullName")}
                                                         required/>
                                {formik.touched.fullName && formik.errors.fullName ?
                                    <div style={{color: "red", fontSize: "10px"}}>{formik.errors.fullName}</div> : null}
                            </div>
                            <div>
                                <b>Looking for a job:</b> <FormControlLabel onChange={formik.handleChange}
                                                                            control={
                                                                                <Checkbox {...formik.getFieldProps("lookingForAJob")}
                                                                                          checked={formik.values.lookingForAJob}/>}
                                                                            label=""/>

                            </div>
                            <div style={{display: "flex", flexDirection: "column", width: "40%"}}>
                                <b>My professional skills:</b> <textarea
                                placeholder={"My professional skills"} {...formik.getFieldProps("lookingForAJobDescription")}/>
                                {formik.touched.fullName && formik.errors.fullName ?
                                    <div style={{color: "red", fontSize: "10px"}}>{formik.errors.fullName}</div> : null}
                            </div>
                            <div style={{display: "flex", flexDirection: "column", width: "40%"}}>
                                <b>About me for :</b> <textarea
                                placeholder={"About me"} {...formik.getFieldProps("aboutMe")}/>
                                {formik.touched.fullName && formik.errors.fullName ?
                                    <div style={{color: "red", fontSize: "10px"}}>{formik.errors.fullName}</div> : null}
                            </div>

                            <div style={{display: "flex", flexDirection: "column", width: "30%"}}>
                                <b>Contacts:</b> {Object.keys(props.profile.contacts).map(key => {
                                return <div key={key} className={s.contact}>
                                    <b>{key}: <input placeholder={key} {...formik.getFieldProps(`contacts.${key}`)}/>
                                    </b>
                                </div>
                            })}
                            </div>
                            <Button size={"small"} type="submit" variant={"contained"}
                                    style={{marginTop: "10px"}}>Save</Button>
                        </div>
                    </FormGroup>
                </form>
            </div>
        </>
    )
}

