import React, {ChangeEvent} from 'react';
import {profilePropsType} from '../../../redux/state';
import s from './Myposts.module.css';
import Post from "./post/Post";
import {Button, TextField} from "@material-ui/core";


function Posts(props: profilePropsType) {

    //значение переменной postsElements будет равно промапленному массиву объектов posts

    let postsElements = props.profilePage.posts.map
    (posts => <Post key={posts.id} message={posts.message} likesCount={posts.likesCount} id={posts.id}/>)

    //функция добавления нового поста

    const addPost = () => {

        props.dispatch({type: "ADD-POST", postText: props.messageForNewPost})
    }


    const newTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        debugger
        props.dispatch({type: 'CHANGE-NEW-TEXT',newText:props.messageForNewPost})
    }


    return <div className={s.content}>
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <TextField id="outlined-basic"
                               variant="outlined"
                               onChange={newTextChangeHandler}
                    />
                </div>
                <div>
                    <Button variant="contained" color="primary" onClick={addPost}>Send</Button>
                    <Button variant="contained" color="secondary">Delete</Button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    </div>
}

export default Posts;