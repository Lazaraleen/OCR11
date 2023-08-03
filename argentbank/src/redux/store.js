import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import profilReducer from './profilSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    profil: profilReducer,
  },
});

export default store;