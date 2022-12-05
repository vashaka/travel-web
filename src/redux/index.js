import { createSlice, configureStore } from "@reduxjs/toolkit";

// Hard Coded ActivePlan
const initialState = { ActivePlan: "VIP" , coordinates:{x:'45.3453029',y:'34.4997274'}};


const AppSlice = createSlice({
  name: "AppSlice",
  initialState,
  reducers: {
    setActivePlan(state, action) {
      state.ActivePlan = action.payload;
    },
    setCoordinates(state, action) {
      state.coordinates = action.payload;
    },
  },
},
);

const store = configureStore({
  reducer: AppSlice.reducer,
});

export const AppActions = AppSlice.actions;

export default store;
