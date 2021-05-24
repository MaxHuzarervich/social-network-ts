import React from 'react';

const friendsData  = [
    {id:1, name: 'John'},
    {id:2, name: 'Bill'},
    {id:3, name: 'Fedor'}
]

export type friendsPropsType = {
    id:number,
    name: string
}

export function Sidebar (props:friendsPropsType) {

    let friends = friendsData.map(friendsData => <Sidebar name={friendsData.name} id={friendsData.id})
    
    return <div>
        <h3>Friends</h3>
        <span></span>
    </div>
}