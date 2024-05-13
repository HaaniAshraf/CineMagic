import { createSlice } from "@reduxjs/toolkit";
// Slice represents a portion of the Redux state.
const userSlice = createSlice({
  name: "user",
  initialState: {
    userDetails: null,
  },
  reducers: {
    // State in Redux refers to the single object that describes the entire state of the application. 
    // Action is a plain JavaScript object that represents an intention to change the state.
    // Payload is a property of actions that holds the actual data you want to pass to the reducer so that the Redux store can update its state. 
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
