import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../../../data/data";

function valueFromLocal() {
  return (
    JSON.parse(localStorage.getItem("data")) || {
      products: storeData,
      amount: 0,
      total: 0,
    }
  );
}
const initialState = {
  products: storeData,
  amount: 0,
  total: 0,
};
const shopSlice = createSlice({
  name: "shop",
  initialState: initialState,
  reducers: {
    incrementAmont: (state, { payload }) => {
      const item = state.products.find((item) => item.name === payload);
      item.amount++;
    },
    decrementAmont: (state, { payload }) => {
      const item = state.products.find((item) => item.name === payload);
      item.amount--;
    },
    removeItem: (state, { payload }) => {
      state.products = state.products.filter((item) => item.name !== payload);
    },
    updateData: (state, { payload }) => {
      let amount = 0;
      let total = 0;
      state.products.forEach((item) => {
        amount += item.amount;
        total += item.price * item.amount;
      });
      state.total = total;
      state.amount = amount;
      // localStorage.setItem("data", JSON.stringify(state));
    },
  },
});

export const { incrementAmont, decrementAmont, removeItem, updateData } =
  shopSlice.actions;
export default shopSlice.reducer;
