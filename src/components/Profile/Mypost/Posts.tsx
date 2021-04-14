import React from 'react';
import s from './Myposts.module.css';
import Post from "./post/Post";

export type postsType = {
    id:number,
    message: string,
    count:number
}
export type PostsType = {
    posts:Array<postsType>
}
 function Posts(props:PostsType ) {

    let postsElements = props.posts.map(p => <Post message={p.message} Count={p.count}/>)   // p = post если с сервера придут сообщения,
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