import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import profilReducer from './profilSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { combineReducers } from '@reduxjs/toolkit';

const persistConfig = {
  key: 'root',
  version: 1,
  storage
};

const reducer = combineReducers ({
  user: userReducer,
  profil: profilReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);
 
const store = configureStore({
  reducer: persistedReducer,
});

export default store;