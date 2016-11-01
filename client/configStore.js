import { createStore, applyMiddleware, compose } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

const configureStore = () => {
    const middlewares = [thunk];
    if (process.env.NODE_ENV === 'development') {
        middlewares.push(createLogger());
    }

    return createStore(
        rootReducer,
        compose(
            applyMiddleware(...middlewares),
            window.devToolsExtension ? window.devToolsExtension() : f => f
        )
    );
};

export default configureStore;