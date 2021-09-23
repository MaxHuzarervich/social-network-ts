import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Header.module.css';
import {headerContainerPropsType} from "./HeaderContainer";

function Header(props: headerContainerPropsType) {
    return <header className={s.header}>
        <div>
            <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmXY6_qN8rHTSRz2NBY71jb5iqt00Yw543HQ&usqp=CAU'/>
        </div>
        <div className={s.loginBlock}>
            {props.isAuth ? props.login : <NavLink to={'/login'}> Login </NavLink>}
        </div>

    </header>
}

export default Header;