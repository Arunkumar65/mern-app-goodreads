import React from 'react';
import './Searchbar.css';
export const Searchbar = () => {
    return (
        <div>
            <input className='searchbar-input' placeholder='Search books' type='text'/>
            <i className="ri-search-line search-icon"></i>
        </div>
    )
}
