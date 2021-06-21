import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";

let reducers = combineReducers({
    profileReducer,                     //создаем объекты у которых есть св-ва и значения
    dialogsReducer,
    //sideBarReducer
})

export let store = createStore()