import React from "react";
import {UsersContainerPropsType} from "../../Users/UsersContainer";
import s from "./Paginator.module.css";


export let Paginator = (props: UsersContainerPropsType) => {

    //округляем кол-во страниц в большую сторону т.к. при делении может получиться нецелое число

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize) //кол-во страничек

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p ? s.selectedPage : ''}
                             onClick={(event) => {
                                 props.onPageChanged(p)
                             }}>{p}</span>//'p' по которому мы итерируемся будет текущей страничкой
            })}
        </div>)
}