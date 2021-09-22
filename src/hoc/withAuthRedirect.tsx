import React from "react";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../redux/redux-store";
import {connect} from "react-redux";
import {MapStateToPropsForRedirectType} from "../components/Profile/ProfileContainer";

//withAuthRedirect для того чтобы снабжать компоненты редиректом

let MapStateToPropsForRedirect = (state: AppStateType): MapStateToPropsForRedirectType => ({
    isAuth: state.auth.isAuth
});

export const withAuthRedirect = (Component:any  ) => {
    class RedirectComponent extends React.Component<any, any> {
        render() {
            if(!this.props.isAuth) return <Redirect to='/login'/>
            return <Component {...this.props}/>;
        }
    }
    let  ConnectedAuthRedirectComponent = connect(MapStateToPropsForRedirect)(RedirectComponent)

    return ConnectedAuthRedirectComponent;
}