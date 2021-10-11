import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const reducer = combineReducers({

});

const middleware = [thunk]; //allows for async requests in actions

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;