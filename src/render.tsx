// import {appStateType} from "./redux/state";
import ReactDOM from "react-dom";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import store from "./redux/state";

export const renderTree = () => {

    ReactDOM.render(
        <React.StrictMode>

                <App store={store.getState()}/>

        </React.StrictMode>,
        document.getElementById('root')
    );
}