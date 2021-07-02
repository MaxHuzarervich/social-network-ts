import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {storeType} from "./store";

let reducers = combineReducers({ //воспринимаем это как наш state
    profilePage: profileReducer,      //создаем объекты у которых есть св-ва и значения
    dialogsPage: dialogsReducer
    //sideBar:sideBarReducer
})


let store:storeType = createStore(reducers);
// export type AppStoreType = typeof store;
// export type AppStateType = ReturnType<typeof reducers>


export default store;