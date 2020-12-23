const initialState = {
  list: [{ id: 1, title: 'Learn coding 😍' }],
  filters: {},
};
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'todo/add': {
      const newList = [...state.list];
      newList.push(action.payload);
      return {
        ...state,
        list: newList,
      };
    }

    case 'todo/remove': {
      return {
        ...state,
        list: state.list.filter((x) => x.id !== action.payload),
      };
    }

    default:
      return state;
  }
};

export default todoReducer;
