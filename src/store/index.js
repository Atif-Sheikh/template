import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { RootReducer } from './reducers';

const middleware = applyMiddleware(thunk);

const store = createStore(RootReducer, middleware);

export default store;