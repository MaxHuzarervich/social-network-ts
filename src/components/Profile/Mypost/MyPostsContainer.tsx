import React, {ChangeEvent} from 'react';
import {addPostAC, newTextChangeHandlerAC, profilePropsType} from '../../../redux/profile-reducer';
import MyPosts from "./MyPosts";
import store from "../../../redux/store";


export function MyPostsContainer(props: profilePropsType) {
    let state = props.store.getState();

    // const way = props.store.dispatch

    //функция добавления нового поста
    const addPost = () => {
        props.store.dispatch(addPostAC(props.messageForNewPost))
    }
    const newTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.store.dispatch(newTextChangeHandlerAC(e.currentTarget.value))
    }
    return (<MyPosts store={store}
                     addPost={addPost}
                     updateNewPostText={newTextChangeHandler}
                     profilePage={props.profilePage}
                     posts={state.profilePage.posts}
                     dispatch={props.dispatch}
                     messageForNewPost={state.profilePage.messageForNewPost}/>)
}

export default MyPostsContainer;