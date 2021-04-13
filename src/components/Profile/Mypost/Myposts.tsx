import React from 'react';
import s from './Myposts.module.css';
import Post from "./post/Post";

function Myposts() {
let postData = [
    {message:'Hi, how are you?',count:15},
    {message:'My first post',count:20}
]
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
            <Post message={postData[0].message} Count={postData[0].count}/>
            <Post message={postData[1].message} Count={postData[1].count}/>
        </div>
        </div>
    </div>
}

export default Myposts;