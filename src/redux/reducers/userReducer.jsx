import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
  name: "user",
  initialState: {
    userDetails: null,
  },
  reducers: {
    saveUserDetails: (state, action) => {
      const { password, confirmPassword, ...userData } = action.payload;
      state.userDetails = userData;
    },
  },
});

export const { saveUserDetails } = userSlice.actions;
export default userSlice.reducer;
