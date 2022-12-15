import { createSlice, configureStore } from "@reduxjs/toolkit";

// Hard Coded ActivePlan
const initialState = {
  ActivePlan: "VIP",
  coordinates: { x: 42.2756944, y: 43.7540462, zoomLevel: 8 },
  qutaisi: { x: 42.2488567, y: 42.69421460000001, zoomLevel: 10 },
  selectedDestination: "Georgia",
  // for selectedLandmarkHotels Logic
  selectedLandmarkId: "",
  // Cart Logic
  // itemsInCart: 0,
  bumpAnimation: false,
  HotelsCart: [],
  landmarksCart: [],
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
    // For Landmarks ----------------------------------------------------------------
    setSelectedLadnmarkId(state, action) {
      // landmarks logic for generating hotels
      state.selectedLandmarkId = state.selectedLandmarkId + action.payload;
    },
    // This function removes selectedHotel with selectedHotelId with replace Method
    removeSelectedLadmarkId(state, action) {
      state.selectedLandmarkId = state.selectedLandmarkId.replace(
        action.payload,
        ""
      );
    },
    // Landmarks cart ----------------------------------------------------------------
    addToLandmarksCart(state, action) {
      state.landmarksCart = [...state.landmarksCart, action.payload];
    },
    // When Removed Landmarks got Its onw Hotels
    removeFromLandmarksCart(state, action) {
      const newCart = state.landmarksCart.filter(
        (item) => item.LandMarkTitle !== action.payload
      );
      state.landmarksCart = newCart;
    },
    // HOTELS CART ----------------------------------------------------------------
    addToHotelsCart(state, action) {
      // alert(action.payload + " is Added");
      // console.log(action.payload);
      state.HotelsCart = [...state.HotelsCart, action.payload];
    },
    removeFromHotelsCart(state, action) {
      const newCart = state.HotelsCart.filter(
        (item) => item.HotelTitle !== action.payload
      );
      state.HotelsCart = newCart;
      console.log(state.HotelsCart + " Cart");
    },

    // Bump Animation -----------------------------------------------------------------
    activateBumpAnimation(state) {
      state.bumpAnimation = true;
    },
    deactivateBumpAnimation(state) {
      state.bumpAnimation = false;
    },
  },
});

const store = configureStore({
  reducer: AppSlice.reducer,
});

export const AppActions = AppSlice.actions;

export default store;
