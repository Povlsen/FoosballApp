import React from 'react'
import axios from 'axios'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store, { history } from './redux/store'

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import * as serviceWorker from './serviceWorker'
import './styling/index.scss'

import ScoreBoard from './pages/ScoreBoard'
import ProfileView from './pages/ProfileView'
import NotFound from './pages/Notfound'

axios.defaults.baseURL = process.env.REACT_APP_API_URL

render(
    <Provider store={store}>
        <Router history={history}>
            <Switch>
                <Route exact path='/' component={ScoreBoard} />
                <Route exact path='/:playerId' component={ProfileView} />
                <Route component={NotFound} />
            </Switch>
        </Router>
    </Provider>,
    document.querySelector('#root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register()
