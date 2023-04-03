import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";

const initialState = {
	cartItems: cartItems,
	amount: 1,
	total: 0,
	isLoading: true,
};

const cartSlice = createSlice({
	name: "cart",
	initialState: initialState,
	reducers: {
		clearCart: (state) => {
			state.cartItems = [];
		},
		removeItem: (state, action) => {
			const itemId = action.payload;
			state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
		},
		increase: (state, action) => {
			const item = state.cartItems.find(
				(element) => element.id === action.payload
			);
			item.amount = item.amount + 1;
		},
		decrease: (state, action) => {
			const item = state.cartItems.find(
				(element) => element.id === action.payload
			);
			item.amount = Math.max(0, item.amount - 1);
		},
		calcTotals: (state) => {
			let amount = 0;
			let total = 0;
			state.cartItems.forEach((item) => {
				amount += item.amount;
				total += item.amount * item.price;
			});
			state.amount = amount;
			state.total = total.toFixed(2);
		},
	},
});

console.log(cartSlice);

export default cartSlice.reducer;
export const { clearCart, removeItem, increase, decrease, calcTotals } =
	cartSlice.actions;
