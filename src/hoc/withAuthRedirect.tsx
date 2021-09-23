import React, {Component, ComponentType} from "react";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../redux/redux-store";
import {connect} from "react-redux";

//HOC!!! withAuthRedirect для того чтобы снабжать компоненты редиректом

type MapStateToPropsForRedirectType = {
    isAuth: boolean
}

let MapStateToPropsForRedirectComponent = (state: AppStateType): MapStateToPropsForRedirectType => ({
    isAuth: state.auth.isAuth
});

export function withAuthRedirect<T>(Component: ComponentType<T>){

    function RedirectComponent(props: MapStateToPropsForRedirectType) {
        let {isAuth, ...restProps} = props
        if (!isAuth) return <Redirect to='/login'/>
        return <Component {...restProps as T}/>;
    }

    let ConnectedAuthRedirectComponent = connect(MapStateToPropsForRedirectComponent)(RedirectComponent)

    return ConnectedAuthRedirectComponent;
}