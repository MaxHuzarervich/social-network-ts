import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {storeType} from "./store";


//rootReducers возращает state всего нашего приложения
let rootReducers = combineReducers({ //воспринимаем это как наш state
    profilePage: profileReducer,      //создаем объекты у которых есть св-ва и значения
    dialogsPage: dialogsReducer
    //sideBar:sideBarReducer
})

export type AppStateType = typeof rootReducers; //typeof типизирует автоматически ф-ции, объекты

let store:storeType = createStore(rootReducers);

// export type AppStateType = ReturnType<typeof reducers>


export default store;