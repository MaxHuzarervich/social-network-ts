import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";

function App() {
    let posts = [
        {id: 1, message: 'Hi, how are you?', count: 15},
        {id: 2, message: 'My first post', count: 20},
        {id: 3, message: 'Blabla', count: 11},
        {id: 4, message: 'Dada', count: 12}
    ]
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path = '/dialogs' render={() => <Dialogs />}/>
                    <Route path = '/profile' render={() => <Profile posts={posts}/>}/>

                </div>

            </div>
        </BrowserRouter>
    );
}

export default App;
