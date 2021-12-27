import React from 'react';
import s from './Myposts.module.css';
import Post from "./post/Post";
import {Button} from "@material-ui/core";
import {MyPostsPropsType} from "./MyPostsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {TextArea} from "../../common/FormControl/FormControls";


const maxLength10 = maxLengthCreator(10)

function MyPosts(props: MyPostsPropsType) {
    //значение переменной postsElements будет равно промапленному массиву объектов posts
    let postsElements = props.posts.map((posts: any) => {
        return (
            <Post
                key={posts.id}
                message={posts.message}
                likesCount={posts.likesCount}
                id={posts.id}
            />
        )
    })
    const AddNewPost = (values: AddPostFormType) => {
        props.addPost(values.messageForNewPost)
    }
    return <div className={s.content}>
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <AddPostFormRedux onSubmit={AddNewPost}/>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    </div>
}

//-------------------------------
type AddPostFormType = {
    messageForNewPost: string
}
const AddNewPostForm: React.FC<InjectedFormProps<AddPostFormType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={TextArea}
                       name='messageForNewPost'
                       placeholder='Enter your message'
                       validate={[required, maxLength10]}
                />
            </div>
            <div>
                <Button type='submit'>Send</Button>
            </div>
        </form>
    )
}
//-------------------------------
//HOC
const AddPostFormRedux = reduxForm<AddPostFormType>({form: 'profileAddNewPostForm'})(AddNewPostForm)
// оборачиваем AddNewPostForm компонентой высшего порядка
export default MyPosts;