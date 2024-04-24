import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer";
import { loadState, saveState } from "./localStorage";

const persistedState = loadState();
const store = configureStore({
  reducer: {
    user: userReducer,
  },
  preloadedState: persistedState,
});
store.subscribe(() => {
  saveState({
    user: store.getState().user,
  });
});
export default store;
