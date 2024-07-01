import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carts: [],
};

const cartSlice = createSlice({
  name: "count",
  initialState,
  reducers: {
    //add to cart method
    addToCart: (state, action) => {
      const cardIndex = state.carts.findIndex(
        (card) => card.id === action.payload.id
      );

      if (cardIndex >= 0) {
        state.carts[cardIndex].qnty += 1;
      } else {
        const add_Qnty = { ...action.payload, qnty: 1 };
        state.carts = [...state.carts, add_Qnty];
      }
    },

    //Decrement the single Item

    Decrement: (state, action) => {
      const cardIndex_dec = state.carts.findIndex(
        (card) => card.id === action.payload.id
      );

      if (state.carts[cardIndex_dec].qnty >= 1) {
        state.carts[cardIndex_dec].qnty -= 1;
      }
    },

    //delete Cart
    deleteCart: (state, action) => {
      const data = state.carts.filter((item) => item.id !== action.payload);
      state.carts = data;
    },

    //Delete all carts

    DeleteAllCqarts: (state, action) => {
      state.carts = [];
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, deleteCart, Decrement, DeleteAllCqarts } =
  cartSlice.actions;
