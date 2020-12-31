import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import studentApi from 'api/studentApi';

export const getRTKStudentList = createAsyncThunk(
  'rtkStudents/getRTKStudentList',
  async (payload) => {
    const response = await studentApi.getAll(payload);
    console.log({ response });
    return response;
  }
);

const studentSlice = createSlice({
  name: 'rtkStudents',
  initialState: {
    list: [],
  },
  reducers: {
    resetStudentList(state) {
      state.list = [];
    },
  },
  extraReducers: {
    [getRTKStudentList.fulfilled]: (state, action) => {
      state.list = action.payload.data || [];
    },
  },
});

const { reducer, actions } = studentSlice;
export const { resetStudentList } = actions;
export default reducer;
