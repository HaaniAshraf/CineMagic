import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
  name: "user",
  initialState: {
    userDetails: null,
  },
  reducers: {
    saveUserDetails: (state, action) => {
      const { confirmPassword, ...userData } = action.payload;
      state.userDetails = userData;
    },
    logoutUser: (state) => {
      state.userDetails = null;
    },
  },
});

export const { saveUserDetails, logoutUser } = userSlice.actions;
export default userSlice.reducer;
