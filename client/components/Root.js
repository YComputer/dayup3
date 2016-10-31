import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './App';
import Home from './Home';
import SigupContainer from './signup/SignupContainer';

const Root = ({ store }) => (
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Home} />
                <Route path="signup" component={SigupContainer} />
            </Route>
        </Router>
    </Provider>
);

Root.propTypes = {
    store: React.PropTypes.object.isRequired,
};

export default Root;