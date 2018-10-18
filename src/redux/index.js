import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/';

const initialState = {};

const middleware = [thunk];

// store takes  (rootReducer, initialState,enchancers like applyMiddleWare)
const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleware),
);

export default store;
