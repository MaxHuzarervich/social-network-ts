
export type appPropsType = {
    store: appStateType
}

export type profileType = {
    profilePage: profilePageType
}

export type profilePropsType = {
    profilePage: profilePageType,
    posts: Array<postsType>,
    addPostCallback: (postText: string) => void,
    changeNewTextCallback: (newText: string) => void,
    message: string
}

export type postsType = {
    id: number,
    message: string,
    count: number
}
export type dialogsType = {
    id: number,
    name: string
}
export type messagesType = {
    id: number,
    message: string,
}
export type messagesPageType = {
    messages: Array<messagesType>
    dialogs: Array<dialogsType>
}
export type profilePageType = {
    posts: Array<postsType>,
    messageForNewPost: string
}

export type appStateType = {
    profilePage: profilePageType,
    dialogsPage: messagesPageType
}

export type storeType = {
    _state: appStateType,
    changeNewText:(newText:string) => void,
    addPost:(postText: string) => void,
    _onChange:() => void,
    subscribe: (callback: () => void) => void,
    getState: () => appStateType
}
 const store: storeType = {
    _state: {
        profilePage: {
            messageForNewPost: '',
            posts: [
                {id: 1, message: 'Hi, how are you?', count: 15},
                {id: 2, message: 'My first post', count: 20},
                {id: 3, message: 'Blabla', count: 11},
                {id: 4, message: 'Dada', count: 12}
            ]
        },
        dialogsPage: {
            messages: [
                {id: 1, message: 'hi'},
                {id: 2, message: 'How is your it-kamasutra?'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Yo'}
            ],
            dialogs: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Svetlana'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Victor'},
                {id: 6, name: 'Valera'}
            ]
        }

    },
    changeNewText(newText: string){
        this._state.profilePage.messageForNewPost = newText;
        this._onChange();
    },
    addPost(postText: string){

        //функция для создания нового поста
        const newPost: postsType = {
            id: new Date().getTime(),
            message: postText,
            count: 0
        }
        this._state.profilePage.posts.push(newPost);
        this._onChange();
    },
    _onChange(){
        console.log('state change')
    },
    subscribe(callback){
        this._onChange = callback;
    },
    getState(){
        debugger
        return this._state;
    },
    dispatch(){

    }
}

export default store;