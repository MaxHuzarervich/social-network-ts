import React, {ChangeEvent} from 'react';
import {addPostAC, newTextChangeHandlerAC} from '../../../redux/profile-reducer';
import MyPosts from "./MyPosts";
import {AppStoreType} from "../../../redux/redux-store";
import StoreContext from "./../../../StoreContext";


type MyPostsContainerPropsType = {
    store: AppStoreType
}

export function MyPostsContainer(props: MyPostsContainerPropsType) {
    let state = props.store.getState();

    //функция добавления нового поста
    const addPost = () => {
        props.store.dispatch(addPostAC(state.profilePage.messageForNewPost))
    }
    const newTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.store.dispatch(newTextChangeHandlerAC(e.currentTarget.value))
    }
    return (   //Мы хотим чтобы наша презентационная компонента имела доступ к store!!!
        <StoreContext.Consumer>
            {(store) =>  <MyPosts
                addPost={addPost}
                updateNewPostText={newTextChangeHandler}
                posts={state.profilePage.posts}
                messageForNewPost={state.profilePage.messageForNewPost}
            />}
        </StoreContext.Consumer>
    )
}

export default MyPostsContainer;