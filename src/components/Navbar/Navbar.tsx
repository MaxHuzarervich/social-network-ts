import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from 'react-router-dom';


function Navbar() {
    return <div className={s.nav}>
        <NavLink to='/profile' className={s.item}>PROFILE</NavLink>
        <NavLink to='/dialogs' className={s.item}>MESSAGES</NavLink>
        <NavLink to='/users' className={s.item}>USERS</NavLink>
        <NavLink to='/news' className={s.item}>NEWS</NavLink>
        <NavLink to='/music' className={s.item}>MUSIC</NavLink>
        <NavLink to='/setting' className={s.item}>SETTING</NavLink>
    </div>

}

export default Navbar;