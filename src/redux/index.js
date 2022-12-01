import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { ActivePlane: "Standard" };

const AppSlice = createSlice({
  name: "AppSlice",
  initialState,
  reducers: {
    setActivePlan(state, action) {
      state.ActivePlane = action.payload;
    },
  },
});

const store = configureStore({
  reducer: AppSlice.reducer,
});

export const AppActions = AppSlice.actions;

export default store;
