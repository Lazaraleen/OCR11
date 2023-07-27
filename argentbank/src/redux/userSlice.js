import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  token: localStorage.getItem('token') || null, // Charger le token depuis le local storage s'il existe
  user: null, // Nouveau champ pour stocker les données du profil de l'utilisateur
  userName: null, // Ajoute ce champ pour stocker le nom de l'utilisateur
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.token = action.payload;
      state.error = null;
      // state.user = action.payload.user;
    },
    loginFailure: (state, action) => {
      state.token = null;
      state.error = action.payload;
    },
    logout: (state) => {
        state.token = null;
        state.user = null; // Réinitialiser les données du profil lors de la déconnexion
        state.error = null;
    },


    // Nouvelle action pour charger les données du profil de l'utilisateur
    loadUserProfileSuccess: (state, action) => {
      state.user = action.payload;
    },
    loadUserProfileFailure: (state, action) => {
      state.user = null;
      state.error = action.payload;
    },
  },
});


export const { 
  loginSuccess, 
  loginFailure, 
  logout,
  loadUserProfileSuccess,
  loadUserProfileFailure,
} = userSlice.actions;


// Thunk pour gérer l'appel à l'API de connexion
export const login = (email, password) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:3001/api/v1/user/login', {
      email,
      password,
    });
    
    const token = response.data.body.token;
    // Stocker le token dans le local storage
    localStorage.setItem('token', token);
    // Dispatch de l'action loginSuccess avec le token comme charge utile    
    dispatch(loginSuccess(response.data.body.token));

  } catch (error) {
    dispatch(loginFailure('Invalid username or password'));
    // const errorMessage = error.response ? error.response.data.message : 'Username or email invalid';
    // dispatch(loginFailure(errorMessage));
  }
};

// Thunk pour charger les données du profil de l'utilisateur
export const loadUserProfile = () => async (dispatch, getState) => {
  const { token } = getState().user;

  // Vérifier si le token est présent
  if (token) {
    try {
      const response = await axios.post('http://localhost:3001/api/v1/user/profile', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      dispatch(loadUserProfileSuccess(response.data.body));
    } catch (error) {
      // En cas d'erreur, supprimer le token pour déconnecter l'utilisateur
      dispatch(logout());
      dispatch(loadUserProfileFailure('Failed to load user profile'));
    }
  } else {
    // En cas d'absence de token, déconnecter l'utilisateur
    dispatch(logout());
  }
};

// Action pour déconnecter l'utilisateur et supprimer le token du local storage
export const logoutUser = () => (dispatch) => {
  localStorage.removeItem('token'); // Supprimer le token du local storage
  dispatch(logout()); // Appeler l'action logout pour réinitialiser l'état Redux
};

export default userSlice.reducer;