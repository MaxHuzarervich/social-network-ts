import React, {ChangeEvent} from 'react';
import {profilePropsType} from '../../../redux/state';
import s from './Myposts.module.css';
import Post from "./post/Post";


function Posts(props: profilePropsType) {

    let postsElements = props.profilePage.posts.map
    (p => <Post message={p.message} count={p.count} id={p.id}/>)
    const addPost = () => {
        props.addPostCallback(props.message)
    }
    const newTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.changeNewTextCallback(e.currentTarget.value)
    }

    return <div className={s.content}>
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea value={props.message} onChange={newTextChangeHandler}/>
                </div>
                <div>
                    <button onClick={addPost}>Add new message</button>
                    <button>Remove</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    </div>
}

export default Posts;