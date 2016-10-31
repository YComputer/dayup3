import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './App';
import Home from './Home';
import SignupPage from './signup/SignupPage';

// 这样写的原因 http://stackoverflow.com/questions/34760825/react-route-react-hot-loader-webpack-you-cannot-change-router-routes-it-will
const routes = (
    <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="signup" component={SignupPage} />
    </Route>
);

const Root = ({ store }) => (
    <Provider store={store}>
        <Router history={browserHistory}>
            {routes}
        </Router>
    </Provider>
);

Root.propTypes = {
    store: React.PropTypes.object.isRequired,
};

export default Root;