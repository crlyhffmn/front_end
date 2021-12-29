import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
  userId: 0,
  userEmail: "",
  username: "",
  userPassword: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialStateValue,
  reducers: {
    loginUser: (state, action) => {
      state.userId = action.payload.userId;
      state.userEmail = action.payload.userEmail;
      state.username = action.payload.username;
      state.userPassword = action.payload.userPassword;
    },

    logoutUser: (state) => {
      state = initialStateValue;
    },
  },
});

export const { loginUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
