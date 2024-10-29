/* eslint-disable prettier/prettier */
import {createSlice} from '@reduxjs/toolkit';

const initLoaderState = {
  isLoading: false,
  loadersCount: 0,
};

const loader = createSlice({
  name: 'loader',
  initialState: initLoaderState,
  reducers: {
    startLoading: state => {
      state.isLoading = true;
      state.loadersCount = state.loadersCount + 1;
    },
    finishLoading: state => {
      const newCount = state.loadersCount - 1;
      const stillWaitingOtherComponent = newCount !== 0;
      state.isLoading = stillWaitingOtherComponent;
      state.loadersCount = newCount;
    },
  },
});

const {actions, reducer} = loader;
export const {startLoading, finishLoading} = actions;
export default reducer;
