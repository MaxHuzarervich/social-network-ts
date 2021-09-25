import {applyMiddleware, combineReducers, createStore} from "redux";
import {addPostAC, newTextChangeHandlerAC, profileReducer, getStatusAC, setUserProfileAC} from "./profile-reducer";
import {dialogsReducer, sendMessageCreator, updateNewMessageBodyCreator} from "./dialogs-reducer";
import {
    followSuccess,
    setCurrentPage,
    setUsers,
    setUsersTotalCount,
    toggleFollowingProgress,
    toggleIsFetching,
    unfollowSuccess,
    usersReducer
} from "./users-reducer";
import {authReducer, setAuthUserData} from "./auth-reducer";
import thunkMiddleware from 'redux-thunk'

export type ActionsTypes =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof newTextChangeHandlerAC>
    | ReturnType<typeof updateNewMessageBodyCreator>
    | ReturnType<typeof sendMessageCreator>
    | ReturnType<typeof followSuccess>
    | ReturnType<typeof unfollowSuccess>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setUsersTotalCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof setUserProfileAC>
    | ReturnType<typeof setAuthUserData>
    | ReturnType<typeof toggleFollowingProgress>
    | ReturnType<typeof getStatusAC>


//rootReducers возвращает state всего нашего приложения
export let rootReducer = combineReducers({ //воспринимаем это как наш state
    profilePage: profileReducer,      //создаем объекты у которых есть св-ва и значения
    dialogsPage: dialogsReducer,
    //sideBar:sideBarReducer,
    usersPage: usersReducer,
    auth: authReducer
})

export type AppStateType = ReturnType<typeof rootReducer>; //typeof типизирует автоматически ф-цию,
// а ф-ция что-то возвращает. А мы говорим дай нам возвращаемый тип!

export let store = createStore(rootReducer, applyMiddleware(thunkMiddleware)); //стор прими промежуточный уровень

// export type AppStateType = ReturnType<typeof reducers>


