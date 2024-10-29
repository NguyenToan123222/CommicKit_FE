import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import serviceRequest from '../../app/serviceRequest';

import Utils from '../../utils';
import authAPI from '../../api/authAPI';
import config from '../../config';

const initialState = {
  userInfo: null,
};

export const authenticate = createAsyncThunk(
  'auth/authenticate',
  async (data, thunkAPI) => {
    return serviceRequest({
      dispatch: thunkAPI.dispatch,
      serviceMethod: authAPI.requestAuthenticate,
      payload: data,
      options: {
        skipLoader: false,
      },
    });
  },
);
export const getMyInfo = createAsyncThunk(
  'auth/getMyInfo',
  async (data, thunkAPI) => {
    return serviceRequest({
      dispatch: thunkAPI.dispatch,
      serviceMethod: authAPI.requestGetMyInfo,
      payload: data,
      options: {
        skipLoader: false,
      },
    });
  },
);

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(authenticate.fulfilled, (state, action) => {
      const {success} = Utils.getValues(action, 'payload', false);
      if (success) {
        const {token} = Utils.getValues(action, 'payload', false);
        Utils.storeData(config.storageKey.AUTH, token);
      }
    });
    builder.addCase(getMyInfo.fulfilled, (state, action) => {
      const {success} = Utils.getValues(action, 'payload', false);
      if (success) {
        const {user} = Utils.getValues(action, 'payload', false);
        state.userInfo = user;
      }
    });
  },
});

const {reducer} = authSlice;
export default reducer;
