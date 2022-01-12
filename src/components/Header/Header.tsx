import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Header.module.css';
import {headerContainerPropsType} from "./HeaderContainer";

function Header(props: headerContainerPropsType) {
    return <header className={s.header}>
        <div className={s.logo}>
        </div>
        <div className={s.login}>
                {props.isAuth ? <div>{props.login} - <button onClick={props.Logout}>Log out</button></div> :
                    <NavLink to={'/login'} style={{textDecoration: 'none'}}> Login </NavLink>}
        </div>

    </header>
}

export default Header;