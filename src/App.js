
//These 3 needed to get data into components & actions firing
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actionCreators from './client/actions/actionCreators'

import Main from './client/components/Main';


// The following code "surfaces" (aka exposes?) the State (Store) & Dispatch (Actions)
// as Props to our components

//define the state you will need from the store. In this case, `posts` and `comments`
const mapStateToProps =(state)=> {
    return {
        posts: state.posts,
        comments: state.comments
    }
}

const mapDispatchToProps =(dispatch)=> {
    return bindActionCreators(actionCreators, dispatch)
}

//Connect() "surfaces" (aka exposes?) the State (Store) & Dispatch (Actions) as Props to our components
const App = connect(mapStateToProps, mapDispatchToProps)(Main)

/*
import React from 'react';
import { Link } from 'react-router'
import logo from './client/images/logo.svg';
import './App.scss';

const App =(props) => {

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2> <Link to="https://www.youtube.com/watch?v=Nw3B7I-Vbn8&index=2&list=PLu8EoSxDXHP5uyzEWxdlr9WQTJJIzr6jy">Learn Redux by WesBos</Link> </h2>
        </div>
        <div className="App-intro">
          <Main {...props} />
        </div>

      </div>
    );
}
*/
export default App;
