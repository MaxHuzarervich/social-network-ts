import React from 'react';
import s from './Post.module.css';
import {Avatar} from "@material-ui/core";
import {PostsType} from "../../../../redux/types";


function Post(props: PostsType) {
    return <div className={s.item}>
        <Avatar>post</Avatar>
        {props.message}
        <div><span>Like {props.likesCount}</span></div>
    </div>
}

export default Post;