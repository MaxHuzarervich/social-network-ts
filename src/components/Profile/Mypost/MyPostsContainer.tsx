import React, {ChangeEvent} from 'react';
import {addPostAC, newTextChangeHandlerAC} from '../../../redux/profile-reducer';
import MyPosts from "./MyPosts";
import {storeType} from "../../../redux/store";


type MyPostsContainerPropsType = {
    messageForNewPost: string;
    store: storeType;
}

function MyPostsContainer(props: MyPostsContainerPropsType) {
    let state = props.store.getState();
    //функция добавления нового поста
    const onAddPost = () => {
        props.store.dispatch(addPostAC(props.messageForNewPost))
    }
    const newTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.store.dispatch(newTextChangeHandlerAC(e.currentTarget.value))
    }
    return (
        <MyPosts updateNewPost={newTextChangeHandler}
                 addPost={onAddPost}
                 posts={state.profilePage.posts}
                 messageForNewPost={state.profilePage.messageForNewPost}
        />
    )
}

export default MyPostsContainer;