import React from "react";
import {Button} from "@material-ui/core";
import s from "./Users.module.css";
import axios from 'axios';
import userPhoto from '../../assets/images/user.png'
import {UsersPropsType} from "./UsersContainer";



export class Users extends React.Component<UsersPropsType, any>{

    constructor(props:UsersPropsType) {
        super(props);
    }
    componentDidMount() {
        //когда выполнишь запрос, выполни затем вот этот коллбек(response-ответ)
        axios.get('https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}')
            .then(response => {
            debugger
            this.props.setUser(response.data.items)
        });
    }

    render() {
                         //округляем кол-во страниц в большую сторону т.к. при делении может получиться нецелое число
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = [];
        for (let i = 1; i <= pagesCount; i++){
            pages.push(i);
        }


        return <div className='User-Img'>
            <div>
                {pages.map(p => {
                   return <span className={this.props.currentPage === p && s.selectedPage}
                   onClick={() => {this.props.setCurrentPage(p)}}>{p}</span>//'p' по которому мы итерируемся будет теекущей страничкой
                })}
            </div>
            {this.props.usersPage.users.map(u => <div key={u.id}>
                <div>
                    <div className={s.UserImg}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto}/>
                    </div>
                    <div>
                        {u.followed ? <Button color={'default'} onClick={() => {
                                this.props.unfollow(u.id)
                            }}>Unfollow</Button> :
                            <Button color={'default'} onClick={() => {
                                this.props.follow(u.id)
                            }}>Follow</Button>}
                    </div>
                </div>
                <span>
            <span>
                <div>{u.name}</div>
                <div>{u.status}</div>
            </span>
            <span>
                <div>{'u.location.country'}</div>
                <div>{'u.location.city'}</div>
            </span>
        </span>
            </div>)}
        </div>
    }
}