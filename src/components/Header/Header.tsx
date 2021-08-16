import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

function Header(){
    return <header className={s.header}>
        <img src='https://api.freelogodesign.org/files/3517eca19f13472a9e46639edd4344e3/thumb/logo_200x200.png?v=637573123420000000'/>

        <div className={s.loginBlock}>
        <NavLink to={'/login'} > Login </NavLink>
        </div>

    </header>
}

export default  Header;