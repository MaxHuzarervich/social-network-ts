import React from 'react';
import './index.css';
import store, {AppStateType} from "./redux/redux-store";
import ReactDOM from "react-dom";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "./StoreContext"


//всем компонентам сидящим в App будет доступен Store благодаря provider --->

export const rerenderEntireTree = (state:AppStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );
}
rerenderEntireTree(store.getState())

store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state)
});  //store позвони мне, когда что-то измениться


