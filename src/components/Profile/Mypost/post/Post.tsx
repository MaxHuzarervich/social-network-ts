import React from 'react';
import s from './Post.module.css';

type PostPropsType = {
    message: string
    Count: number
}

function Post(props: PostPropsType) {
    return <div className={s.item}>
        <img src='https://www.logodesign.net/logo/alt-5607ld.png?size=2&industry=gaming'/>
        {props.message}
        <div><span>Like {props.Count}</span></div>
    </div>

}

export default Post;