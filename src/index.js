import { CssBaseline } from '@material-ui/core';
import store from 'app/store';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <CssBaseline />
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('app')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// TODO: Remove after testing
// const initialState = {
//   list: [{ id: 1, title: 'Learn coding 😍' }],
//   filters: {},
// };
// const todoReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'todo/add': {
//       const newList = [...state.list];
//       newList.push(action.payload);
//       return {
//         ...state,
//         list: newList,
//       };
//     }

//     case 'todo/remove': {
//       return {
//         ...state,
//         list: state.list.filter((x) => x.id !== action.payload),
//       };
//     }

//     default:
//       return state;
//   }
// };

// const store = createStore(todoReducer);
// console.log('Init store successfully 🎉', store.getState());

// store.subscribe(() => console.log(store.getState()));

// const addTodo = (newTodo) => ({
//   type: 'todo/add',
//   payload: newTodo,
// });

// // Fake dispatching actions
// const action = addTodo({
//   id: 2,
//   title: 'Sleeping 😜',
// });
// store.dispatch(action);

// store.dispatch({
//   type: 'todo/add',
//   payload: {
//     id: 2,
//     title: 'Sleeping 😜',
//   },
// });

// store.dispatch({
//   type: 'todo/add',
//   payload: {
//     id: 3,
//     title: 'Eating 😊',
//   },
// });

// store.dispatch({
//   type: 'todo/remove',
//   payload: 1,
// });

// store.dispatch({
//   type: 'todo/remove',
//   payload: 3,
// });
