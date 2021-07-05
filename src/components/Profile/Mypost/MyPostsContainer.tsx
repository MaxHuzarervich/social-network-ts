import React, {ChangeEvent} from 'react';
import {addPostAC, InitialStateProfileType, newTextChangeHandlerAC} from '../../../redux/profile-reducer';
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";



type MapDispatchToPropsType = {
    addPost: (props: InitialStateProfileType) => void
    updateNewPost: (e: ChangeEvent<HTMLTextAreaElement>) => void
}
export type MyPostsPropsType = InitialStateProfileType & MapDispatchToPropsType

let MapStateToProps = (state: AppStateType): InitialStateProfileType => {
    return {
        posts: state.profilePage.posts,
        messageForNewPost: state.profilePage.messageForNewPost  //первый объект достает данные из стейта и передает их в пропсы
    }
}
let MapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addPost: (props: InitialStateProfileType) => {
            dispatch(addPostAC(props.messageForNewPost))
        },
        updateNewPost: (e: ChangeEvent<HTMLTextAreaElement>) => {
            dispatch(newTextChangeHandlerAC(e.currentTarget.value))
        }

    }
}
//создаем контейнерную компоненту для презентационной компоненты MyPosts.
const MyPostsContainer = connect(MapStateToProps, MapDispatchToProps)(MyPosts)

export default MyPostsContainer;