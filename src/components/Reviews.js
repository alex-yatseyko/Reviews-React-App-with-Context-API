import React, { useContext } from 'react'

import { ReviewsInput } from './ReviewsInput'
import { ReviewItem } from './ReviewItem'
import { ReviewsContext } from '../inc/ReviewsContext'

export const Reviews = () => {
    const reviews = useContext(ReviewsContext)

    return (
        <div className="container">
            <h1 className="text-center mt-5">Welcome to Reviews</h1>
            <ReviewsInput />
            <div className="row">
                {reviews.map(r => <div className="col-md-4 mb-4" key={r.id}>
                <ReviewItem 
                    id={r.id}
                    title={r.title}
                    text={r.text}
                    author={r.author}
                /></div>)}
            </div>
        </div>
    )
}