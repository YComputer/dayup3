import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';

const configureStore = () => {
    const middlewares = [thunk];
    if (process.env.NODE_ENV === 'development') {
        middlewares.push(createLogger());
    }

    return createStore(
        (state = {}) => state,
        applyMiddleware(...middlewares)
    );
};

export default configureStore;