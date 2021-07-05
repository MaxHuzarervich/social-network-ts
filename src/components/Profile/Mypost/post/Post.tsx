import React from 'react';
import s from './Post.module.css';
import {Avatar} from "@material-ui/core";
import {postType} from "../../../../redux/profile-reducer";


function Post(props: postType) {
    return <div className={s.item}>
        <Avatar>post</Avatar>
        {props.message}
        <div><span>Like {props.likesCount}</span></div>
    </div>
}

export default Post;