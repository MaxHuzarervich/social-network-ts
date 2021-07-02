import React, {ChangeEvent} from 'react';
import {addPostAC, newTextChangeHandlerAC} from '../../../redux/profile-reducer';
import MyPosts from "./MyPosts";
import {storeType} from "../../../redux/store";
import {StoreContext} from "../../../StoreContext";


type MyPostsContainerPropsType = {
    messageForNewPost: string;
    store: storeType;
}

function MyPostsContainer(props: MyPostsContainerPropsType) {
    //Consumer как бы потребитель из store
    return (
        <StoreContext.Consumer>{
            (store) => {
                let state = props.store.getState();
                //функция добавления нового поста
                const onAddPost = () => {
                    store.dispatch(addPostAC(props.messageForNewPost))
                }
                const newTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
                    store.dispatch(newTextChangeHandlerAC(e.currentTarget.value))
                }
                return <MyPosts updateNewPost={newTextChangeHandler}
                                addPost={onAddPost}
                                posts={state.profilePage.posts}
                                messageForNewPost={state.profilePage.messageForNewPost}
                />
            }
        }
        </StoreContext.Consumer>
    )
}

export default MyPostsContainer;