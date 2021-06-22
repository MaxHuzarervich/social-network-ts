import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {AppStoreType} from "./redux/redux-store";
import {ActionsTypes} from "./redux/store";
// import {AppPropsType} from './redux/store';


type AppPropsType = {
    store: AppStoreType
    dispatch: (action: ActionsTypes) => void
}

const App: React.FC<AppPropsType> = (props) => {
    const state = props.store.getState();
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>

                <Route path='/dialogs' render={() => <Dialogs //route следит за url,если совпадает c path
                    // то отрисовывает--->
                    dialogsPage={state.dialogsPage}
                    dispatch={props.dispatch.bind(props.store)}
                newMessageBody={state.dialogsPage.newMessageBody}/>}/>

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
