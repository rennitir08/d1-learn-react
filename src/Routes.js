// Load React
import React from 'react'
import App from './components/App';
// Load React Router
import { Router, Route, browserHistory } from 'react-router'

// Load React Router Redux
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import store from './Reducers'
const history = syncHistoryWithStore(browserHistory, store)

// Load page view components
// Import your Todos and Completed components here...
import Todos from './components/Todo';
import Completed from './components/Completed';

// Configure routes
class Routes extends React.Component {
    render() {
        return <Provider store={store}>
            <Router history={history}>
                <Route path="/" component={Todos} />
                <Route path="/completed" component={Completed} />
            </Router>
        </Provider>
    }
}

export default Routes
