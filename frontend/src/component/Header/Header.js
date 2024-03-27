import React from 'react';
import './style.css';
import { Logo } from '../Logo/Logo';

export const Header = () => {
    return (
        <>
            <div className='header-sec'>
                <div className='logo-header'>
                    <div className='logo'>
                        <Logo />
                    </div>
                </div>
            </div>
        </>
    )
}
