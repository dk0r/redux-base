/*
ACTIONS are objects that have a:
'type' (of action that occurred)                and a (preferably minimal)
'payload' (that indicates, e.g. which photo was deleted, which comment was deleted, etc..)

REDUCERS execute actions
*/

//increment likes
export const increment =(index)=> {
        return {
            type: 'INCREMENT_LIKES',
            index: index    //or just index for ES6
        }
}

//add comment
export const addComment =(postId, author, comment) => {
    return {
        type: 'ADD_COMMENT',
        postId: postId,
        author: author,
        comment: comment,
    }
}

//remove comment
export const removeComment =(postId, commentId)=>{
    return {
        type: 'REMOVE_COMMENT',
        postId: postId,
        commentId: commentId
    }
}
