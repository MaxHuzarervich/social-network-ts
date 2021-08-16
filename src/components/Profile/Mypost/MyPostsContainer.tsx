import React, {ChangeEvent} from 'react';
import {addPostAC, initialStateType, newTextChangeHandlerAC} from '../../../redux/profile-reducer';
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";



export type MapDispatchToPropsType = {
    addPost: (messageForNewPost:string) => void
    updateNewPost: (e: ChangeEvent<HTMLTextAreaElement>) => void
}
export type MapStateToProps = {
    posts: any //
    messageForNewPost: any //
}

export type MyPostsPropsType = MapStateToProps & MapDispatchToPropsType

//каждый раз когда в стейте происходят изменения запускается MapStateToProps,
//и формируется новый объект, и сравниваются внутренности старого и нового объекта
let MapStateToProps = (state: AppStateType): MapStateToProps => {
    return {
        posts: state.profilePage.posts,
        messageForNewPost: state.profilePage.messageForNewPost  //первый объект достает данные из стейта и передает их в пропсы
    }
}
let MapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addPost: (messageForNewPost) => {
            dispatch(addPostAC(messageForNewPost))
        },
        updateNewPost: (e: ChangeEvent<HTMLTextAreaElement>) => {
            dispatch(newTextChangeHandlerAC(e.currentTarget.value))
        }

    }
}
//создаем контейнерную компоненту для презентационной компоненты MyPosts.
const MyPostsContainer = connect(MapStateToProps, MapDispatchToProps)(MyPosts)

export default MyPostsContainer;