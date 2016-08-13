import { createStore } from 'redux'

//allows us to hookup react-router to redux
import { syncHistoryWithStore } from 'react-router-redux'

//is going away?
import { browserHistory } from 'react-router'

//import root reducer
import rootReducer from './client/reducers/index'

//import some prexisting data into the store
import comments from './client/data/comments'
import posts from './client/data/posts'


//Create an object for the default data
/*
const defaultState = {
    posts: posts,
    comments: comments

}
//Note that for above, the property-key and variable name are the same.
//Therefore in ES6 you can just do this:
*/
const defaultState = {
    posts,      // posts: posts,
    comments    //comments: comments
}


//Create the store (which takes the rootReducer and a defaultState as inputs)
const store = createStore(rootReducer, defaultState);
export default store;

//Create history
export const history = syncHistoryWithStore(browserHistory, store);
