import cartReducer from 'features/Cart/cartSlice';
import counterReducer from 'features/Counter/counterSlice';
import studentReducer from 'features/Student/reducer';
import rtkStudentReducer from 'features/Student/studentSlice';
import todoReducer from 'features/Todo/reducer';

const rootReducer = {
  todos: todoReducer,
  students: studentReducer,
  rtkStudents: rtkStudentReducer,
  counter: counterReducer,
  cart: cartReducer,
};

export default rootReducer;
