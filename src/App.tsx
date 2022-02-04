import React from 'react';
import s from './App.module.css';
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route} from "react-router-dom";
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
// import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UserContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from './components/Login/Login';
import {AppStateType, store} from "./redux/redux-store";
import {initializeApp} from "./redux/app-reducer";
import {connect, Provider} from "react-redux";
import {Preloader} from "./components/common/Preloader/Preloader";

type appPropsType = MapDispatchToPropsType & MapStateToPropsType

type MapDispatchToPropsType = {
    initializeApp: () => void
}

type MapStateToPropsType = {
    initialized: boolean
}

const MapStateToProps = (state: AppStateType) => ({
    initialized: state.app.initialized
})

class App extends React.Component<appPropsType, any> {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {

        if(!this.props.initialized){
            return <Preloader/>
        }

        return (<div style={{display: 'flex', flexDirection: 'column'}}>
                <HeaderContainer/>
                <Navbar/>
                <div className={s.app_wrapper}>
                    <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                    <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                    <Route path='/users' render={() => <UserContainer/>}/>
                    <Route path='/login' render={() => <Login/>}/>
                </div>
            </div>
        );
    }
}

let AppContainer = connect(MapStateToProps, {initializeApp})(App);

export let SamuraiJSApp = () => {
return <BrowserRouter>
    <Provider store={store}>
        <AppContainer />
    </Provider>
</BrowserRouter>
}



