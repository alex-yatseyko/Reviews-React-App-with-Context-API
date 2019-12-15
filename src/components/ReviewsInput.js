import React, { useState, useContext } from 'react'

import { ReviewsContext } from '../inc/ReviewsContext'

export const ReviewsInput = () => {
    const reviews = useContext(ReviewsContext)

    const [input, setInput] = useState({
        title: '',
        text: '',
        author: '',
        id: Math.random()
    })

    const onChangeTitle = e => {
        setInput({
            title: e.target.value,
            text: input.text,
            author: input.author,
            id: input.id
        })
        console.log(input)
    }

    const onChangeText = e => {
        setInput({
            title: input.title,
            text: e.target.value,
            author: input.author,
            id: input.id
        })
        console.log(input)
    }

    const onChangeAuthor = e => {
        setInput({
            title: input.title,
            text: input.text,
            author: e.target.value,
            id: input.id
        })
        console.log(input)
    }

    // const onChange = e => {
    //     setInput(e.target.value)
    // }

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
            <div className="modal fade mt-5" id="exampleModal"  role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Add Review</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <form className="mb-3 mt-3 pt-3 pb-3 pl-3 pr-3">
                <div className="modal-body">
                    <div className="form-group">
                        <input placeholder="Review title" onChange={onChangeTitle} value={input.title} type="text" className="reviewInput"/>
                        <input placeholder="Review Text" onChange={onChangeText} value={input.text } type="text" className="reviewInput mt-3"/>
                        <input placeholder="Review Author" onChange={onChangeAuthor} value={input.author } type="text" className="reviewInput mt-3"/>
                    </div>
                </div>
                <div className="modal-footer text-center" style={{justifyContent: 'center'}}>
                    <button onClick={onSubmit} type="submit" className="btn btn-primary" data-dismiss="modal">Submit</button>
                </div>

                    
                </form>

                </div>
            </div>
            </div>
        </div>
    )
}
