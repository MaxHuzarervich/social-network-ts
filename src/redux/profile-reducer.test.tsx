import {addPostAC, initialStateType, profileReducer, ProfileType} from "./profile-reducer";


it('new post should be added',
    () => {
        //1. test data
        let action = addPostAC('it-kamasutra')
        let state: initialStateType = {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 15},
                {id: 2, message: 'My first post', likesCount: 20},
            ],
            profile: {} as ProfileType,
            status: ''
        }
        //2. action
        let newState = profileReducer(state, action)
        //3.expectations
        expect(newState.posts.length).toBe(3)
    })