import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [],
  },
  reducers: {
    addToCart(state, action) {
      // action.payload = { product, quantity }
      const newItem = action.payload;
      const idx = state.cartItems.findIndex((x) => x.product.id === newItem.product.id);
      if (idx < 0) {
        // not existed in cart
        state.cartItems.push(newItem);
      } else {
        // existed in cart
        state.cartItems[idx].quantity += newItem.quantity;
      }
    },

    removeFromCart(state, action) {},

    removeAllFromCart(state, action) {},

    clearCart(state) {
      state.cartItems = [];
    },
  },
});

const { reducer, actions } = cartSlice;
export const { addToCart, removeAllFromCart, removeFromCart, clearCart } = actions;
export default reducer;
