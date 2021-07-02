import React, {ChangeEvent} from 'react';
import {addPostAC, newTextChangeHandlerAC} from '../../../redux/profile-reducer';
import MyPosts from "./MyPosts";
import {storeType} from "../../../redux/store";
import {connect} from "react-redux";


type MyPostsContainerPropsType = {
    messageForNewPost: string;
    store: storeType;
}

let MapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        messageForNewPost: state.profilePage.messageForNewPost  //первый объект достает данные из стейта и передает их в пропсы
    }
}
let MapDispatchToProps = (dispatch) => {
    return {
        addPost: (props:MyPostsContainerPropsType) => {
            dispatch(addPostAC(props.messageForNewPost))
        },
        updateNewPost: (e: ChangeEvent<HTMLTextAreaElement>) => {
            dispatch(newTextChangeHandlerAC(e.currentTarget.value))
        }

    }
}
//создаем контейнерную компоненту для презентационной компоненты MyPosts.
const MyPostsContainer = connect(MapStateToProps,MapDispatchToProps)(MyPosts)

export default MyPostsContainer;