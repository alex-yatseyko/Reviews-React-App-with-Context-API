import React from 'react'
import img from '../404-not-found.jpeg'

export const NoMatch = () => {
    return (
        <div className="text-center page-404">
            <h1 className="title-404" style={{position: 'absolute'}}>404 Not Found💩</h1>
            <img alt={`Not found`} src={img} className="picture-404"/>
        </div>
    )
}
 