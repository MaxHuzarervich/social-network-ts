import {addPostAC, deletePost, initialStateType, profileReducer, ProfileType} from "./profile-reducer";

let state: initialStateType = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 15},
        {id: 2, message: 'My first post', likesCount: 20},
    ],
    profile: {} as ProfileType,
    status: ''
}

it('new post should be added',
    () => {
        //1. test data
        let action = addPostAC('it-kamasutra')
        //2. action
        let newState = profileReducer(state, action)
        //3.expectations
        expect(newState.posts.length).toBe(3)
        // expect(newState.posts[3].message).toBe('it-kamasutra')
    })

it('message for new post should be correct',
    () => {
        //1. test data
        let action = addPostAC('new message')
        //2. action
        let newState = profileReducer(state, action)
        //3. expectations
        expect(newState.posts[2].message).toBe('new message')
    })

it('after delete length of messages should be decrement', () => {
    //1. test data
    let action = deletePost(1)
    //2. action
    let newState = profileReducer(state, action)
    //3. expectations
    expect(newState.posts.length).toBe(1)
})