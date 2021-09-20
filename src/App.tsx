import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UserContainer from "./components/Users/UsersContainer";
import {ProfileContainerS} from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {setUsers, setUsersTotalCount, toggleIsFetching} from "./redux/users-reducer";
import { Login } from './components/Login/Login';


const App = () => {

    return (
        <div className='app-wrapper'>
            <HeaderContainer getAuthUserData={() => {}}/>
            <Navbar/>
            <div className='app-wrapper-content'>

                <Route path='/dialogs' render={() =>
                    <DialogsContainer />}/>

                <Route path='/profile/:userId?' render={() =>
                    <ProfileContainerS/>}/>

                <Route path='/users' render={() =>
                    <UserContainer
                        onPageChanged={pageNumber => {}}
                        setUsers={setUsers}
                        setUsersTotalCount={setUsersTotalCount}
                        toggleIsFetching={toggleIsFetching}/>}/>
                <Route path='/login' render={() => <Login/>}/>
            </div>
        </div>
    );
}
//route следит за url,если совпадает c path
// то отрисовывает--->
export default App;
