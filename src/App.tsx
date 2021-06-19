import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {AppPropsType} from './redux/state';


const App: React.FC<AppPropsType> = (props) => {
    const state = props.store.getState();
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>

                <Route path='/dialogs' render={() => <Dialogs //route следит за url,если совпадает то отрисовывает--->
                    dialogsPage={state.dialogsPage}/>}/>

                <Route path='/profile' render={() =>
                    <Profile
                        dispatch={props.dispatch.bind(props.store)}
                        posts={state.profilePage.posts}
                        profilePage={state.profilePage}/>}/>

            </div>
        </div>
    );
}

export default App;
