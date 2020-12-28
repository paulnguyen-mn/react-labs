import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment(state) {
      state.value++;
      // return state + 1;
      // state++;
    },
    decrement(state) {
      return {
        value: state.value - 1,
      };
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
