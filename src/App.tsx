import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {AppDispatchType, AppStoreType} from "./redux/redux-store";


type AppPropsType = {
    store: AppStoreType
    dispatch: AppDispatchType
}

const App: React.FC<AppPropsType> = (props) => {

    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                {/*route следит за url,если он совпадает c path то отрисовывает--->*/}
                <Route path='/dialogs' render={() =>
                    <DialogsContainer
                        store={props.store}
                    />}
                />
                <Route path='/profile' render={() =>
                    <Profile
                        store={props.store}
                    />
                }/>

            </div>
        </div>
    );
}

export default App;
