import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'

// import { Routes } from '../inc/routes'
import { ReviewsContext } from '../inc/ReviewsContext'

export const Author = () => {
    let { author } = useParams()

    const reviews = useContext(ReviewsContext)
    const authorReviews = reviews.filter(f => f.author === author)
    
    return (
        <div className="container text-center">
            <div className="container text-center mt-5" style={{width: '100%'}}>
            <h1 className="mb-5">{ author }</h1>
            <ul className="list-group mb-3">
                {
                    authorReviews.map(r => 
                    <li key={r.id} className="list-group-item">
                        <Link to={`/reviews/${r.id}`}>
                            {r.title}
                        </Link>
                    </li>)
                }
            </ul>
            </div>
            <Link className="btn btn-info mt-3" to="/">Back To Index</Link>
        </div>
    )
}
