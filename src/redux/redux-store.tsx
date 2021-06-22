import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";

let reducers = combineReducers({ //воспринимаем это как наш state
    profilePage: profileReducer,      //создаем объекты у которых есть св-ва и значения
    dialogsPage: dialogsReducer
    //sideBar:sideBarReducer
})


let store = createStore(reducers);
export type AppStoreType = typeof store;
export type AppStateType = ReturnType<typeof reducers>


export default store;