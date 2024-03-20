/* eslint-disable no-param-reassign */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface TokenState {
  accessToken: string;
}

const initialState: TokenState = {
  accessToken: '',
};

export const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
    },
    deleteToken: (state) => {
      state.accessToken = '';
    },
  },
});

export const { setToken, deleteToken } = tokenSlice.actions;

export const selectToken = (state: { token: TokenState }) =>
  state.token.accessToken;

export default tokenSlice.reducer;
