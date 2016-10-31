import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './App';
import Home from './Home';
import SignupPage from './signup/SignupPage';

const Root = ({ store }) => (
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Home} />
                <Route path="signup" component={SignupPage} />
            </Route>
        </Router>
    </Provider>
);

Root.propTypes = {
    store: React.PropTypes.object.isRequired,
};

export default Root;