/*
A REDUCER executes created actions.
Each peice of state should have it's own reducers
e.g. In this project, posts and comments (in `store.js`) should each have their own reducers

A REDUCER
1) Takes in an:
--Action
--A copy of the current state (aka, the store)

2) Manipulates the state (store copy) based
upon the provided action.

3) Returns the modified State (modified store copy).
*/

//state=[] because the first time the posts function runs the stat wont be equal to anything so we set it equal to an empty array
const posts =(state = [], action)=> {

    switch (action.type) {
        case 'INCREMENT_LIKES':
            console.log('Incrementing likes..')
            const i = action.index
            return [
                ...state.slice(0,i),
                {...state[i], likes: state[i].likes + 1},
                ...state.slice(i+1),
            ]
            //break;
        default:
            return state
    }

    //return state
}

export default posts
