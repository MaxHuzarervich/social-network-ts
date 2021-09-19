import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UserContainer from "./components/Users/UsersContainer";
import {ProfileContainerS} from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";


const App = () => {

    return (
        <div className='app-wrapper'>
            <HeaderContainer />
            <Navbar/>
            <div className='app-wrapper-content'>

                <Route path='/dialogs' render={() =>
                    <DialogsContainer/>}/>

                <Route path='/profile/:userId?' render={() =>
                    <ProfileContainerS/>}/>

                <Route path='/users' render={() =>
                    <UserContainer
                        toggleIsFetching={isFetching => {}}
                        setUsersTotalCount={totalCount => {}}
                        setUsers={users => {}}
                        onPageChanged={pageNumber => {}}/>}/>

            </div>
        </div>
    );
}
//route следит за url,если совпадает c path
// то отрисовывает--->
export default App;
