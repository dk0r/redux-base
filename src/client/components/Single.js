import React from 'react'
import Photo from './Photo'
import Comments from './Comments'

const Single =(props)=> {
    //destructure params to grab the postId variable to be used multiple times below
    const { postId } = props.params

    //get the index of the post that was originally clicked so that you know which Photo to load as the Single.
    const i = props.posts.findIndex((post)=>post.code===postId);
    //get the particular post itself
    const post = props.posts[i]

    //gets the Comments on the particular post (or no comments if there arent any)
    const postComments = props.comments[postId] || []

    //get the comment text of the i^th post
    //const postComment = props.comments[i].text
    //const commentsUser = props.comments[i].user
    return(
        <div>
            <Photo i={i} post={post} {...props} />
            <Comments postComments={postComments}/>
        </div>
    )
}

export default Single
