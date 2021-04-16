import React from 'react';
import s from './Post.module.css';
import {postsType} from "../../../../redux/state";


function Post(props: postsType) {
    return <div className={s.item}>
        <img src='https://www.logodesign.net/logo/alt-5607ld.png?size=2&industry=gaming'/>
        {props.message}
        <div><span>Like {props.count}</span></div>
    </div>

}

export default Post;