import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/root_reducer';

const configureStore = (preloadedState = {}) => {
    let middleware = [thunk];
    if (process.env.NODE_ENV === 'production') {
        middleware = [thunk];
    }
    return createStore(
        rootReducer,
        preloadedState,
        applyMiddleware(thunk)
    );
};


export default configureStore;