import React from 'react'

const Comments =(props)=> {

    const renderComment =(comment, i)=> (
        <div key={i}>
            {comment.user}
        </div>
    )

    return(
        <div>
            {props.postComments.map(renderComment)}
        </div>
    )
}

export default Comments
