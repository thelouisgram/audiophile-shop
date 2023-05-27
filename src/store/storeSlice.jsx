import { createSlice } from "@reduxjs/toolkit";

const storeSlice = createSlice({
  name: "state",
  initialState: {
    nav: false,
    cart: false,
    cartArray: [],
    cartTotal: 0,
    cartItemsNumber: 0,
    shipping: 50,
    vat: 0,
    grandTotal: 0,
    completeOrder: [],
    thankYou: false,
    notifMessage: [],
  },
  reducers: {
    toggleCart: (state, action) => {
      state.cart = action.payload;
    },
    updateCart: (state, action) => {
      state.cartArray = action.payload;
    },
    updateCartTotal: (state, action) => {
      state.cartTotal = action.payload;
    },
    updateCartItemsNumber: (state, action) => {
      state.cartItemsNumber = action.payload;
    },
    updateVat: (state, action) => {
      state.vat = action.payload;
    },
    updateGrandTotal: (state, action) => {
      state.grandTotal = action.payload;
    },
    updateCompleteOrder: (state, action) => {
      state.completeOrder = action.payload;
    },
    updateThankYou: (state, action) => {
      state.thankYou = action.payload;
    },
    updateNotifMessage: (state, action) => {
      state.notifMessage = action.payload;
    },
    toggleNav: (state, action) => {
      state.nav = action.payload;
    }
  },
});

export default storeSlice.reducer;
export const {
  toggleCart,
  updateCart,
  updateCartTotal,
  updateCartItemsNumber,
  updateVat,
  updateGrandTotal,
  updateCompleteOrder,
  updateThankYou,
  updateNotifMessage,
  toggleNav,
} = storeSlice.actions;
