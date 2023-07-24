import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  token: null,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.token = action.payload;
      state.error = null;
    },
    loginFailure: (state, action) => {
      state.token = null;
      state.error = action.payload;
    },
    logout: (state) => {
        state.token = null;
        state.error = null;
    },
  },
});

export const { loginSuccess, loginFailure, logout } = userSlice.actions;

export default userSlice.reducer;

// Thunk pour gérer l'appel à l'API de connexion
export const login = (email, password) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:3001/api/v1/user/login', {
      email,
      password,
    });

    dispatch(loginSuccess(response.data.body.token));
  } catch (error) {
    dispatch(loginFailure('Invalid email or password'));
  }
};