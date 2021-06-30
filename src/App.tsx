import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import store, {AppPropsType} from "./redux/store";
import DialogsContainer from "./components/Dialogs/Message/DialogsContainer";


const App: React.FC<AppPropsType> = (props) => {
    const state = props.store.getState();
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                {/*route следит за url,если он совпадает c path то отрисовывает--->*/}
                <Route path='/dialogs' render={() =>
                    <DialogsContainer
                    store={props.store}
                    newMessageBody={state.dialogsPage.newMessageBody}
                    dispatch={props.dispatch}
                    dialogsPage={state.dialogsPage}
                    sendMessage={() => {}}
                    updateNewMessageBody={body => {}}
                />}/>

                <Route path='/profile' render={() =>
                    <Profile
                        store={store}
                        dispatch={props.dispatch.bind(props.store)}
                        posts={state.profilePage.posts}
                        profilePage={state.profilePage}
                    />
                }/>

            </div>
        </div>
    );
}

export default App;
