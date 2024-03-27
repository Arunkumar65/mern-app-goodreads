import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import './Rating.css';

export const StartRating = ({ size, from }) => {
    const [ratingValue, setRatingValue] = useState()
    return (
        <>
            <div className='d-flex align-items-center'>
                {!from && <span className='rate-text'>Rate it:</span>}
                <div>
                    <Rating
                        name="text-feedback"
                        size={size}
                        value={ratingValue}
                        onChange={(e) => [
                            setRatingValue(e.target.defaultValue)
                        ]}
                        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                    />
                </div>
            </div>

        </>
    )
}
