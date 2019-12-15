import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'

import { Routes } from '../inc/routes'
import { ReviewsContext } from '../inc/ReviewsContext'


export const ReviewSingle = ({...props}) => {
    const reviews = useContext(ReviewsContext)

    let { id } = useParams()

    return (
        <div className="container text-center">
            <div className="container card text-center mt-5" style={{width: '100%'}}>
                <h1 className="mt-3">{reviews[id-1].title}</h1>
                <p className="mt-3">{reviews[id-1].text}</p>
                <h6 className="float-right text-right">By <Link to={`/author/${reviews[id-1].author}`}>{(reviews[id-1].author)}</Link></h6>
            </div>
            <Link className="btn btn-info mt-3" to={Routes.REVIEWS}>Back To Reviews</Link>
        </div>
    )
}
