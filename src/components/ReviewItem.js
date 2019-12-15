import React from 'react'
import { Link } from 'react-router-dom'

// import { Routes } from '../inc/routes'
// import { ReviewsContext } from '../inc/ReviewsContext'
// const reviews = useContext(ReviewsContext)

export const ReviewItem = ({...props}) => {
    return (
        <div className="card text-center" style={{width: '21rem'}}>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.text}</p>
                <Link to={`/reviews/${props.id}`} className="btn btn-primary mt-3">Read more...</Link>
            </div>
        </div>
    )
}
