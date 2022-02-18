import React, {Suspense} from 'react';
import s from './App.module.css';
import Navbar from "./components/Navbar/Navbar";
import {HashRouter, Route} from "react-router-dom";
// import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UserContainer from "./components/Users/UsersContainer";
// import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from './components/Login/Login';
import {AppStateType, store} from "./redux/redux-store";
import {initializeApp} from "./redux/app-reducer";
import {connect, Provider} from "react-redux";
import {Preloader} from "./components/common/Preloader/Preloader";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

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
                    <Route path='/dialogs'
                           render={() => <Suspense fallback={<div>Loading...</div>}><DialogsContainer/></Suspense>}/>
                    <Route path='/profile/:userId?'
                           render={() => <Suspense fallback={<div>Loading...</div>}><ProfileContainer/></Suspense>}/>
                    <Route path='/users' render={() => <UserContainer/>}/>
                    <Route path='/login' render={() => <Login/>}/>
                </div>
            </div>
        );
    }
}

let AppContainer = connect(MapStateToProps, {initializeApp})(App);

export let SamuraiJSApp = () => {
return <HashRouter>
    <Provider store={store}>
        <AppContainer />
    </Provider>
</HashRouter>
}



