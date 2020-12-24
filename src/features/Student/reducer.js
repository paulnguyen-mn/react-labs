const initialState = {
  list: [],
  loading: false,
  error: '',
};
const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'students/getStudentListStart': {
      return {
        ...state,
        loading: true,
        error: '',
      };
    }

    case 'students/getStudentListSuccess': {
      const { data } = action.payload;

      return {
        ...state,
        loading: false,
        list: data,
      };
    }

    case 'students/getStudentListFailed': {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }

    default:
      return state;
  }
};

export default studentReducer;
