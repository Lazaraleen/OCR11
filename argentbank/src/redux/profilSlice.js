import { createSlice } from "@reduxjs/toolkit";

const profilSlice = createSlice({
  name: "profil",
  initialState: {
    email: "",
    firstName: "",
    lastName: "",
    userName: "",
  },
  reducers: {
    profilUser: (state, action) => {
      state.email = action.payload.data.body.email;
      state.firstName = action.payload.data.body.firstName;
      state.lastName = action.payload.data.body.lastName;
      state.userName = action.payload.data.body.userName;
    },
  },
});

export const { profilUser } = profilSlice.actions;
export default profilSlice.reducer;