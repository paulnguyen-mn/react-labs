import studentApi from 'api/studentApi';

const getStudentListStart = () => ({
  type: 'students/getStudentListStart',
});
const getStudentListSuccess = (data) => ({
  type: 'students/getStudentListSuccess',
  payload: data,
});
const getStudentListFailed = (error) => ({
  type: 'students/getStudentListFailed',
  payload: error,
});
// Async action - redux thunk
export const getStudentList = (params) => {
  return async (dispatch) => {
    try {
      dispatch(getStudentListStart());

      const response = await studentApi.getAll(params);
      const action = getStudentListSuccess(response);
      dispatch(action);
    } catch (error) {
      const action = getStudentListFailed(error);
      dispatch(action);

      throw error;
    }
  };
};
