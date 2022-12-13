import { createSlice, configureStore } from "@reduxjs/toolkit";

// Hard Coded ActivePlan
const initialState = {
  ActivePlan: "VIP",
  coordinates: { x: 42.2756944, y: 43.7540462, zoomLevel: 8 },
  qutaisi: { x: 42.2488567, y: 42.69421460000001, zoomLevel: 10 },
  // cart
  cart: [],
  itemsInCart: 0,
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
    },
    // We should Move this to different Redux
    addItem(state, action) {
      state.cart = [...state.cart, action.payload];
      state.itemsInCart += 1;
      console.log(state.cart);
    },
    removeItem(state, action) {
      const newCart = state.cart.filter(
        (item) => item.id !== action.payload.id
      );
      state.cart = newCart;
      state.itemsInCart -= 1;
      console.log(state.cart);
    },
  },
});

const store = configureStore({
  reducer: AppSlice.reducer,
});

export const AppActions = AppSlice.actions;

export default store;
