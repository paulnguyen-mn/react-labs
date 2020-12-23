import todoReducer from 'features/Todo/reducer';
import { combineReducers } from 'redux';

// Ref: https://redux.js.org/tutorials/fundamentals/part-3-state-actions-reducers#combinereducers
const rootReducer = combineReducers({
  todos: todoReducer,
});

export default rootReducer;
