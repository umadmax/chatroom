import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from './reducer';
import socket from './socket';

const enhancers = applyMiddleware(socket);

const store = createStore(reducer);

export default store;
