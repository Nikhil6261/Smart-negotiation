import { createSlice } from "@reduxjs/toolkit";

const user = {
  id: null,
  name: null,
  email: null,
  role: null,
};

const ProfileSlice = createSlice({
  name: "profile",
  initialState: {
    user,
    token: null,
    isAuthanicate: null,
  },

  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.token = action.payload;
      state.isAuthanicate = true;
    },

    logOut: (state) => {
      state.user = {
        id: null,
        name: null,
        email: null,
        role: null,
      };
      token : null,
      isAuthanicate = false
    },


  },
});



export const { setUser , logOut} = ProfileSlice.actions

export default ProfileSlice.reducer