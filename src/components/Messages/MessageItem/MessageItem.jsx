import React from 'react';
import s from './../Messages.module.css'
import { NavLink } from 'react-router-dom'

const MessageItem = (props) => {
    let path = '/messages/' + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export default MessageItem;