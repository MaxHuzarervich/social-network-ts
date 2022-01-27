import React from 'react';
import s from './App.module.css';
import Navbar from "./components/Navbar/Navbar";
import {Route, withRouter} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UserContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from './components/Login/Login';
import {connect} from "react-redux";
import {getAuthUserData} from "./redux/auth-reducer";

type appPropsType = MapDispatchToPropsType

type MapDispatchToPropsType = {
    getAuthUserData: () => void
}

export class App extends React.Component<appPropsType, any> {

    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
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

//route следит за url,если совпадает c path
// то отрисовывает--->
// export default compose(
//     withRouter,
//     connect(null, {getAuthUserData})(App));
