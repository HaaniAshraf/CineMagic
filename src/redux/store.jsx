import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer";
import { loadState, saveState } from "./localStorage";

// Loading any persisted state from localStorage
const persistedState = loadState();
// Creating the store using Redux Toolkit's configureStore
const store = configureStore({
  reducer: {
    user: userReducer,
  },
  // Setting the initial state of the store to be the loaded persisted state
  preloadedState: persistedState,
});
// Subscribing to the store's changes
store.subscribe(() => {
  // Every time the store updates, save the current state of the user slice to localStorage
  saveState({
    user: store.getState().user,
  });
});
export default store;
