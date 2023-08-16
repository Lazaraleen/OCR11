import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: null,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // Action pour mettre à jour le token dans le state
    setToken: (state, action) => {
      state.token = action.payload;
      // Mettre le token dans le localStorage lorsqu'il est mis à jour dans le state
      localStorage.setItem('token', action.payload);
    },
    // Action pour gérer les erreurs d'authentification
    setError: (state, action) => {
      state.error = action.payload;
    },
    // Action pour effacer les informations lorsqu'il se déconnecte
    logout: (state) => {
      state.token = null;
      state.error = null;
      localStorage.removeItem('token');
    },
  },
});

export const { setToken, setError, logout } = userSlice.actions;

export default userSlice.reducer;