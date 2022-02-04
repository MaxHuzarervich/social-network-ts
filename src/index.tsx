import React from 'react';
import './index.css';
import ReactDOM from "react-dom";
import {SamuraiJSApp} from "./App";

//Provider использует ContextAPI для того чтобы засунуть в context этот store чтобы до него достучаться
ReactDOM.render(
    <SamuraiJSApp />,
    document.getElementById('root'));




