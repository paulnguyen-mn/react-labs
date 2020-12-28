// import { applyMiddleware, createStore } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import thunk from 'redux-thunk';
// import rootReducer from './rootReducer';

// const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
// export default store;

import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

const store = configureStore({ reducer: rootReducer });
export default store;
// The store now has redux-thunk added and the Redux DevTools Extension is turned on
