import {combineReducers, createStore} from "redux";
import {addPostAC, newTextChangeHandlerAC, profileReducer, setUserProfileAC} from "./profile-reducer";
import {dialogsReducer, sendMessageCreator, updateNewMessageBodyCreator} from "./dialogs-reducer";
import {
    follow,
    setCurrentPage,
    setUsers,
    setUsersTotalCount,
    toggleIsFetching,
    unfollow,
    usersReducer
} from "./users-reducer";
import {authReducer, setUserDataAC} from "./auth-reducer";


export type ActionsTypes =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof newTextChangeHandlerAC>
    | ReturnType<typeof updateNewMessageBodyCreator>
    | ReturnType<typeof sendMessageCreator>
    | ReturnType<typeof follow>
    | ReturnType<typeof unfollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setUsersTotalCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof setUserProfileAC>
    // | ReturnType<typeof setUserDataAC>;

//rootReducers возвращает state всего нашего приложения
export let rootReducer = combineReducers({ //воспринимаем это как наш state
    profilePage: profileReducer,      //создаем объекты у которых есть св-ва и значения
    dialogsPage: dialogsReducer,
    //sideBar:sideBarReducer,
    usersPage: usersReducer,
    auth: authReducer
})

export type AppStateType = ReturnType <typeof rootReducer>; //typeof типизирует автоматически ф-цию,
// а ф-ция что-то возвращает. А мы говорим дай нам возвращаемый тип!

export let store = createStore(rootReducer);


// export type AppStateType = ReturnType<typeof reducers>


