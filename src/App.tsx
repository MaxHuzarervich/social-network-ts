import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {AppStoreType} from "./redux/redux-store";
import {ActionsTypes} from "./redux/store";
import DialogsContainer from "./components/Dialogs/Message/DialogsContainer";
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

                <Route path='/dialogs' render={() => <DialogsContainer //route следит за url,если он совпадает c path
                    // то отрисовывает--->
                    store={props.store}/>}/>

                <Route path='/profile' render={() =>
                    <Profile
                        store={props.store}
                        // dispatch={props.dispatch.bind(props.store)}
                        // posts={state.profilePage.posts}
                        // profilePage={state.profilePage}
                    />
                }/>

            </div>
        </div>
    );
}

export default App;
