import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.scss';

//import Components

import Single from './client/components/Single'
import PhotoGrid from './client/components/PhotoGrid'

//import React Router deps
import { Router, Route, IndexRoute } from 'react-router'

//Bindings that allow us to use Redux w/ React
import { Provider } from 'react-redux'

//Redux data store that was made in store.js
import store, { history } from './store.js'

const router = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}> //PhotoGrid & Single are passed in as children of Main depending on what the url is (/ -> Main, /view/:postId -> Single)
                <IndexRoute component={PhotoGrid}></IndexRoute>
                <Route path="/view/:postId" component={Single}></Route>
            </Route>
        </Router>
    </Provider>
)

ReactDOM.render(
  router,
  document.getElementById('root')
)
