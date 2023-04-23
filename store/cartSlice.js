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
    // update the subtotal price counting
    updateSubTotalPrice: (state) => {
      // ittreate the arry or cart and then add the price of them
      let total = 0;
      state.value.data.forEach((item) => {
        total += item.price * item.qty;
      });
      state.value.subTotalPrice = total;
    },

    // add item to cart function
    addItemToCart: (state, action) => {
      const productIndex = state.value.data.findIndex(
        (element) => element.productId === action.payload.productId
      );

      if (productIndex < 0) {
        // add new product
        state.value.data = [...state.value.data, action.payload];
      } else {
        // increment the quantity of the same product
        const product = state.value.data[productIndex];
        product.qty++;
      }
    },

    // update the quantity of the product
    updateQuantityOfProduct: (state, action) => {
      // find the product in cart where qty needs to be updated
      const productIndex = state.value.data.findIndex(
        (element) => element.productId === action.payload.productId
      );
      const product = state.value.data[productIndex];

      // update qty
      product.qty = action.payload.qty;
    },

    // update product size
    updateProductSize: (state, action) => {
      // find the product in cart where qty needs to be updated
      const productIndex = state.value.data.findIndex(
        (element) => element.productId === action.payload.productId
      );
      const product = state.value.data[productIndex];

      // update product size
      product.selectedSize = action.payload.size;
    },
    removeItemFromCart: function (state, item) {},
    emptyCart: function (state) {},
  },
});

// Action creators are generated for each case reducer function
export const {
  updateSubTotalPrice,
  addItemToCart,
  updateQuantityOfProduct,
  updateProductSize,
  removeItemFromCart,
  emptyCart,
} = cartSlice.actions;

export default cartSlice.reducer;
