import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    value: {
      data: [],
      subTotalPrice: 0,
    },
  },
  reducers: {
    addItemToCart: (state, action) => {
      const productIndex = state.value.data.findIndex(
        (element) => element.productId === action.payload.productId
      );

      if (productIndex < 0) {
        // add new product
        state.value.data = [...state.value.data, action.payload];
        state.value.subTotalPrice += action.payload.price * action.payload.qty;
      } else {
        // increment the quantity of the same product
        const product = state.value.data[productIndex];
        product.qty++;
        console.log("Same product: ", product.qty);
      }
    },
    updateQuantityOfProduct: (state, action) => {
        const productIndex = state.value.data.findIndex(
            (element) => element.productId === action.payload.productId
          );
          const product = state.value.data[productIndex];
          product.qty = action.payload.qty
    },
    removeItemFromCart: function (state, item) {},
    emptyCart: function (state) {},
  },
});

// Action creators are generated for each case reducer function
export const { addItemToCart, updateQuantityOfProduct, removeItemFromCart, emptyCart } =
  cartSlice.actions;

export default cartSlice.reducer;
