import { createSlice, configureStore } from "@reduxjs/toolkit";

// Hard Coded ActivePlan
const initialState = {
  ActivePlan: "VIP",
  coordinates: { x: 42.2756944, y: 43.7540462, zoomLevel: 8 },
  qutaisi: { x: 42.2488567, y: 42.69421460000001, zoomLevel: 10 },
  selectedDestination: "Georgia",
  // cart
  bumpAnimation: false,
  cart: [],
  itemsInCart: 0,
  totalPrice: 0,
  selectedIdForFilteringHotels: "",
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
    setSelectedDestination(state, action) {
      state.selectedDestination = action.payload;
    },
    // We should Move this to different Redux -----------------------------------------------------------------
    setSelectedLadnmarkId(state, action) {
      state.selectedIdForFilteringHotels += action.payload?.idForSelectedHotels;
    },
    removeSelectedLandmarkid(state, action) {
      state.selectedIdForFilteringHotels =
        state.selectedIdForFilteringHotels.replace(
          action.payload?.idForSelectedHotels,
          ""
        );
    },
    addItem(state, action) {
      if (state.cart.find((item) => item.title === action.payload.title)) {
        return;
      }
      state.cart = [...state.cart, action.payload];
      state.itemsInCart += 1;
      state.totalPrice = state.totalPrice + action.payload.price;
    },

    removeItem(state, action) {
      if (state.cart.find((item) => item.title === action.payload.title)) {
        const updatedCart = state.cart.filter(
          (item) => item.title !== action.payload.title
        );
        state.cart = updatedCart;
      }
      const newCart = state.cart.filter(
        (item) => item.id !== action.payload.id
      );
      state.cart = newCart;
      state.itemsInCart -= 1;
      state.totalPrice = state.totalPrice - action.payload.price;
    },
    activateBumpAnimation(state) {
      state.bumpAnimation = true;
    },

    deActivateBumpAnimation(state) {
      state.bumpAnimation = false;
    },
  },
});

const store = configureStore({
  reducer: AppSlice.reducer,
});

export const AppActions = AppSlice.actions;

export default store;
