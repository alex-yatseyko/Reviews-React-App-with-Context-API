import React, { useState, useContext } from 'react'

import { ReviewsContext } from '../inc/ReviewsContext'

export const ReviewsInput = () => {
    const reviews = useContext(ReviewsContext)

    const [input, setInput] = useState('')

    const onChange = e => {
        setInput(e.target.value)
    }

    const onAdd = (value) => {
        reviews.push(value)
    }

    const onSubmit = e => {
        e.preventDefault();
        if (input === '') return;
        onAdd(input)
        setInput('')
        console.log(reviews)
    }

    return (
        <div>
            <form className="card mb-3 mt-3 pt-3 pb-3 pl-3 pr-3">
                <div className="form-group">
                    <input placeholder="Review title" onChange={onChange} value={input} type="text" style={{width: '100%', height: '3rem', padding: '20px', fontSize: '26px'}}/>
                </div>
                <button onClick={onSubmit} type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
