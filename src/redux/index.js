import { createSlice, configureStore } from "@reduxjs/toolkit";

// Hard Coded ActivePlan
const initialState = {
  ActivePlan: "VIP",
  coordinates: { x: 42.2756944, y: 43.7540462, zoomLevel: 8 },
  qutaisi: { x: 42.2488567, y: 42.69421460000001, zoomLevel: 10 },
};

const AppSlice = createSlice({
  name: "AppSlice",
  initialState,
  reducers: {
    setActivePlan(state, action) {
      state.ActivePlan = action.payload;
    },
    setCoordinates(state, action) {
      state.coordinates = action.payload;
      console.log(action.payload);
    },
  },
});

const store = configureStore({
  reducer: AppSlice.reducer,
});

export const AppActions = AppSlice.actions;

export default store;
