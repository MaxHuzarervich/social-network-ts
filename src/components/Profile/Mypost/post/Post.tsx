import React from 'react';
import s from './Post.module.css';
import {postsType} from "../../../../redux/state";
import {Avatar, Icon} from "@material-ui/core";



function Post(props: postsType) {
    return <div className={s.item}>
        <Avatar>post</Avatar>
        {props.message}
        <div><span>Like {props.likesCount}</span></div>
    </div>
}

export default Post;