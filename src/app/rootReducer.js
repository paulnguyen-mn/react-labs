import studentReducer from 'features/Student/reducer';
import todoReducer from 'features/Todo/reducer';
import counterReducer from 'features/Counter/counterSlice';

const rootReducer = {
  todos: todoReducer,
  students: studentReducer,
  counter: counterReducer,
};

export default rootReducer;
