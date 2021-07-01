import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import {ActionsTypes, storeType} from "./redux/store";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
// import {AppPropsType} from './redux/store';


type AppPropsType = {
    store: storeType
    dispatch: (action: ActionsTypes) => void
}

const App: React.FC<AppPropsType> = (props) => {

    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>

                <Route path='/dialogs' render={() =>
                    <DialogsContainer newMessageBody={props.store.getState().dialogsPage.newMessageBody}
                                      dialogsPage={props.store.getState().dialogsPage}
                                      store={props.store}/>}/>

                <Route path='/profile' render={() =>
                    <Profile posts={props.store.getState().profilePage.posts}
                             profilePage={props.store.getState().profilePage}
                             store={props.store}/>}/>

            </div>
        </div>
    );
}
//route следит за url,если совпадает c path
// то отрисовывает--->
export default App;
