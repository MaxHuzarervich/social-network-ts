import React from 'react';
import s from './Myposts.module.css';
import Post from "./post/Post";

function Myposts() {
    return <div className={s.content}>
        <div>
            My posts
            <div>
                <div><textarea/></div>
                <div>
                    <button>Add post</button>
                    <button>Remove</button>
                </div>
            </div>
            <Post message='Hi, how are you?' Count='15'/>
            <Post message="It's my first post" Count='20'/>
        </div>
    </div>
}

export default Myposts;