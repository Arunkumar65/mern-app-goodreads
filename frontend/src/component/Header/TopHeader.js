import React from 'react'
import TopNav from "../../assets/img/top-header.jpg";
import './style.css';

export const TopHeader = () => {
    return (
        <div><img className='top-navbar' width={'100%'} src={TopNav} alt=''/></div>
    )
}
