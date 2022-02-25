import React, {Suspense} from 'react';
import s from './App.module.css';
import Navbar from "./components/Navbar/Navbar";
import {HashRouter, Route, withRouter, Switch, Redirect} from "react-router-dom";
import UserContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from './components/Login/Login';
import {AppStateType, store} from "./redux/redux-store";
import {initializeApp} from "./redux/app-reducer";
import {connect, Provider} from "react-redux";
import {Preloader} from "./components/common/Preloader/Preloader";
import {compose} from "redux";

//не собирай ее в один большой бандл, а оставляй на потом когда эта компонента понадобится, я запрошу ее с сервера,
// чтобы первый загрузочный файл не был таким большим, приложение загружается быстрее
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

    //компонента вмонтировалась
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {

        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (<div style={{display: 'flex', flexDirection: 'column'}}>
                <HeaderContainer/>
                <Navbar/>
                <div className={s.app_wrapper}>
                    <Switch>
                        <Route exact path='/'
                               render={() => <Redirect to={'/profile'}/>}/>
                        <Route path='/dialogs'
                               render={() => <Suspense
                                   fallback={<div>Loading...</div>}><DialogsContainer/></Suspense>}/>
                        <Route path='/profile/:userId?'
                               render={() => <Suspense
                                   fallback={<div>Loading...</div>}><ProfileContainer/></Suspense>}/>
                        <Route path='/users' render={() => <UserContainer/>}/>
                        <Route path='/login' render={() => <Login/>}/>
                        <Route path='*' render={() => <div>404 PAGE NOT FOUND</div>}/>
                    </Switch>
                </div>
            </div>
        );
    }
}

// let AppContainer = connect(MapStateToProps, {initializeApp})(App);

//compose один за одним применяет компоненты высшего порядка (HOC)
let AppContainer = compose<React.ComponentType>(
    withRouter, //информация из routing
    connect(MapStateToProps, {initializeApp}))(App);//connect даёт данные из store

export let SamuraiJSApp = () => {
    return <HashRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </HashRouter>
}
//Provider использует ContextAPI для того чтобы засунуть в context этот store чтобы до него достучаться
//любая компонента может стать потребителем стора



