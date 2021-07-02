import React from 'react';
import './index.css';
import store from "./redux/redux-store";
import ReactDOM from "react-dom";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import { Provider } from 'react-redux';

export const rerenderEntireTree = () => {
//Provider использует ContextAPI для того чтобы засунуть в context этот store чтобы до него достучаться
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App store={store} dispatch={store.dispatch.bind(store)} />
            </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );
}
rerenderEntireTree()
store.subscribe(() => {
    // let state = store.getState()
    rerenderEntireTree()
});  //store позвони мне, когда что-то измениться


