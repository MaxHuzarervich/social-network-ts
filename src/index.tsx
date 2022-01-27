import React from 'react';
import './index.css';
import {store} from "./redux/redux-store";
import ReactDOM from "react-dom";
import {App} from "./App";
import {BrowserRouter} from "react-router-dom";
import {Provider} from 'react-redux';
import {getAuthUserData} from "./redux/auth-reducer";

//Provider использует ContextAPI для того чтобы засунуть в context этот store чтобы до него достучаться
ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App getAuthUserData={getAuthUserData}/>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root'));



