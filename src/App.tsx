import React from 'react';
import s from './App.module.css';
import Navbar from "./components/Navbar/Navbar";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UserContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from './components/Login/Login';


const App = () => {
    return (<div>
            <HeaderContainer/>
            <div className={s.navAndRightBlock}>
                <Navbar/>
                <div className={s.app_wrapper}>
                    <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                    <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                    <Route path='/users' render={() => <UserContainer/>}/>
                    <Route path='/login' render={() => <Login/>}/>
                </div>
            </div>
        </div>
    );
}
//route следит за url,если совпадает c path
// то отрисовывает--->
export default App;
