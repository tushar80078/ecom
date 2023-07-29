import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  cartItems: [],
  totalCartItems: 0,
  selected: []
};

export const ecomSlice = createSlice({
  name: 'ecomSlice',
  initialState,
  reducers: {
    setStoreData: (state, action) => {
      state.data = action.payload;
    },

    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItemIndex = state.cartItems.findIndex(
        (item) => item.id === newItem.id
      );

      if (existingItemIndex !== -1) {
        state.cartItems[existingItemIndex].quantity += 1;
      } else {
        state.cartItems.push({ ...newItem, quantity: 1 });
      }

      state.totalCartItems = state.cartItems.reduce(
        (total, item) => total + item.quantity,
        0
      );

    },

    removeFromCart: (state, action) => {
      const itemIdToRemove = action.payload;
      const existingItemIndex = state.cartItems.findIndex(
        (item) => item.id === itemIdToRemove
      );

      if (existingItemIndex !== -1) {
        if (state.cartItems[existingItemIndex].quantity > 1) {
          state.cartItems[existingItemIndex].quantity -= 1;
        } else {
          state.cartItems.splice(existingItemIndex, 1);
        }
      }

      state.totalCartItems = state.cartItems.reduce(
        (total, item) => total + item.quantity,
        0
      );
    },

    selectedItem: (state, action) => {
      state.selected = [action.payload];
    }
  },

});

export const { setStoreData, addToCart, totalCartItems, removeFromCart, selectedItem } = ecomSlice.actions;

export default ecomSlice.reducer;
