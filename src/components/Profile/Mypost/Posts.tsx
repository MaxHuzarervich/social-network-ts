import React from 'react';
import state from '../../../redux/state';
import s from './Myposts.module.css';
import Post from "./post/Post";
import {profilePageType} from "../../../redux/state";

type profilePropsType = {
    profilePage: profilePageType
}

function Posts(props:profilePropsType) {

    let postsElements = props.profilePage.posts.map(p => <Post message={p.message} count={p.count} id={p.id}/>)   // p = post если с сервера придут сообщения,
                                                                                     //  то наш код отрисует их
    return <div className={s.content}>
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <div><textarea/></div>
                <div>
                    <button>Add post</button>
                    <button>Remove</button>
                </div>
            </div>
            <div className={s.posts}>
                { postsElements }
            </div>
        </div>
    </div>
}

export default Posts;