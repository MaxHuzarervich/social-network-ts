import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from "./redux/state";
// import {appStateType} from "./redux/state";
import ReactDOM from "react-dom";
import App from "./App";

export const rerenderEntireTree = () => {

    ReactDOM.render(
        <React.StrictMode>

            <App store={store.getState()}/>

        </React.StrictMode>,
        document.getElementById('root')
    );
}
store.subscribe(rerenderEntireTree);  //отрисовка после изменений
rerenderEntireTree()                  //начальная отрисовка



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
