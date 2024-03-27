import React from 'react'
import './BooksItem.css'
import { BooksItem } from './BooksItem';
import { Books } from "./books"

export const BooksItemContainer = () => {

    return (
        <>
            {
                Books.map((book) => {
                    return <div className='book-item-container'>
                        <BooksItem data={book} />
                    </div>
                })
            }
        </>
    )
}
