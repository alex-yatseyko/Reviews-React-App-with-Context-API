import React from 'react'
import { useHistory } from 'react-router-dom'

import { Routes } from '../inc/routes'

export const Shop = () => {
    const history = useHistory()

    const onClick = () => {
        history.push(Routes.HOME)
    }

    return (
        <div className="container text-center">
            <h1 className="text-center mt-5">Welcome to Shop</h1>
            <img src="https://pbs.twimg.com/profile_images/846659478120366082/K-kZVvT8_400x400.jpg" className="rounded mx-auto d-block" alt="..." />
            <button type="button" className="btn btn-outline-primary btn-lg mt-5" data-toggle="modal" data-target="#exampleModal">Buy</button>
        
            {/* <!-- Modal --> */}
            <div className="modal fade mt-5" id="exampleModal"  role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    Sorry, but there is no products now <span>💩</span>
                </div>
                <div className="modal-footer text-center" style={{justifyContent: 'center'}}>
                    <button onClick={onClick} type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}
