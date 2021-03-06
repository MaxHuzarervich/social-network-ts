import React from 'react';
import {addPostAC} from '../../../redux/profile-reducer';
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";


export type MapDispatchToPropsType = {
    addPost: (messageForNewPost: string) => void
}
export type MapStateToProps = {
    posts: any
}

export type MyPostsPropsType = MapStateToProps & MapDispatchToPropsType

//каждый раз когда в стейте происходят изменения запускается MapStateToProps,
//и формируется новый объект, и сравниваются внутренности старого и нового объекта
let MapStateToProps = (state: AppStateType): MapStateToProps => {
    return {
        posts: state.profilePage.posts,
    }
}
let MapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addPost: (messageForNewPost) => {
            dispatch(addPostAC(messageForNewPost))
        }
    }
}
//создаем контейнерную компоненту для презентационной компоненты MyPosts.
const MyPostsContainer = connect(MapStateToProps, MapDispatchToProps)(MyPosts)

export default MyPostsContainer;