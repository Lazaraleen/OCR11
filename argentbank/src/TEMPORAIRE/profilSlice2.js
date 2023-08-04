import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Récupérer les données du profil
const fetchUserProfile = createAsyncThunk('profil/fetchUserProfile', async (_, thunkAPI) => {
    // Récupérer le token depuis le state de Redux
    const token = thunkAPI.getState().user.token;
  // Vérifier que le token est disponible avant d'appeler l'API
  if (!token) {
    throw new Error('Token not available.');
  }

  try {
    console.log('Fetching user profile...');
  // Appeler l'API pour récupérer les données du profil
  const response = await axios.post('http://localhost:3001/api/v1/user/profile', null, {
  });
  console.log(response.data.body);
  return response.data.body;
  } catch (error) {
    // Si l'API renvoie une erreur, vous pouvez la gérer ici si nécessaire
    throw new Error('Failed to fetch user profile.');
  }
});


const initialState = {
  profile: null,
  loading: false,
  error: null,
};

const profilSlice = createSlice({
  name: 'profil',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Gérer la réussite de l'action asynchrone
    builder.addCase(fetchUserProfile.fulfilled, (state, action) => {
      state.profile = action.payload;
      state.loading = false;
      state.error = null;
    });

    // Gérer l'action en cas d'erreur de l'action asynchrone
    builder.addCase(fetchUserProfile.rejected, (state, action) => {
      state.profile = null;
      state.loading = false;
      state.error = action.error.message;
    });

    // Gérer l'action en cours (pending) de l'action asynchrone
    builder.addCase(fetchUserProfile.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
  },
});

export { fetchUserProfile };

export default profilSlice.reducer;