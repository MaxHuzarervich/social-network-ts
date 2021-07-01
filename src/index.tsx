import React from 'react';
import './index.css';
import store from "./redux/redux-store";
import ReactDOM from "react-dom";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import StoreContext from "./StoreContext"


//всем компонентам сидящим в App будет доступен Store благодаря provider --->

export const rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <StoreContext.Provider value={store}>
                <App />
            </StoreContext.Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );
}
rerenderEntireTree()

store.subscribe(() => {
    rerenderEntireTree()
});  //store позвони мне, когда что-то измениться


