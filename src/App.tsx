import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {appStateType} from './redux/state';


type appPropsType = {
    state:appStateType
}

function App(props:appPropsType) {
    return (
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() => <Dialogs dialogsPage={props.state.dialogsPage}/>}/>
                    <Route path='/profile' render={() => <Profile profilePage={props.state.profilePage}/>}/>
                </div>

            </div>
    );
}

export default App;
