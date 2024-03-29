import React, { useState, useEffect } from 'react'
import './BooksItem.css'
import { BooksItem } from './BooksItem';
import { books } from "./books"
import { getRequest } from '../../utils/api';
export const BooksItemContainer = () => {
    const [booksList, setBooksList] = useState([...books]);
    const [page, setPage] = useState(1);
    const [hasNextPage, setHasNextPage] = useState(true);

    useEffect(() => {
        // fetchData();
    }, [page]); // Fetch data whenever page changes


    const fetchData = async () => {

        const url = 'infinite/scroll';

        const params = {
            page: page,
            limit: 10
        }
        getRequest(url, params).then((response) => {
            console.log(response);
            setBooksList(prevData => [...prevData, ...response.data]);
            setHasNextPage(response.data.hasNextPage);
        });
    };

    const handleScroll = () => {
        if (
            window.innerHeight + document.documentElement.scrollTop ===
            document.documentElement.offsetHeight
        ) {
            if (hasNextPage) {
                setPage(prevPage => prevPage + 1);
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [hasNextPage]); // Add/remove event listener when hasNextPage changes

    return (
        <>
            {
                booksList.map((book) => {
                    return <div className='book-item-container'>
                        <BooksItem data={book} />
                    </div>
                })
            }
        </>
    )
}
