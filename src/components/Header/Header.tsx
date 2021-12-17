import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Header.module.css';
import {headerContainerPropsType} from "./HeaderContainer";
import {Button} from "@material-ui/core";

function Header(props: headerContainerPropsType) {
    return <header className={s.header}>
        <div className={s.logo}>

        </div>
        <div className={s.login}>
            <Button variant="outlined" className={s.item}>
                {props.isAuth ? props.login :
                    <NavLink to={'#/login'} style={{textDecoration: 'none'}}> Login </NavLink>}
            </Button>
        </div>

    </header>
}

export default Header;