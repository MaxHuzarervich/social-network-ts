import React from 'react';
import state, {postsType} from '../../../redux/state';
import s from './Myposts.module.css';
import Post from "./post/Post";
import {profilePageType} from "../../../redux/state";

type profilePropsType = {
    profilePage: profilePageType,
    posts: Array<postsType>,
    addPostCallback: (postText: string) => void
}

function Posts(props: profilePropsType) {

    let postsElements = props.profilePage.posts.map(p => <Post message={p.message} count={p.count} id={p.id}/>)
    let postMessageRef = React.createRef <HTMLTextAreaElement>();  //createRef - ссылка на что-либо
    const addPost = () => {
        debugger;
        if (postMessageRef.current) {
            props.addPostCallback(postMessageRef.current.value)
        }   //value textarea
    }
    return <div className={s.content}>
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={postMessageRef}>{props.posts.map(p => <div key={p.id}>{p.message}</div>)}</textarea>
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