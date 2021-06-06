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
store.subscribe(rerenderEntireTree);
rerenderEntireTree()



