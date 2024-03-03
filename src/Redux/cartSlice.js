import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  products: [],
  cartTotalQuantity : 0,
  cartTotalAmount : 0,
  itemtotal : 0
};

export const cartSlice = createSlice({
  name: "productitem",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.products.find(
        (item) => item.id === action.payload.id
      );
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
    
    },
    increaseQuantity: (state, action) => {
      const item = state.products.find(
        (item) => item.id === action.payload.id
      );
      if (item) {
        item.quantity++;
      }
      
    },
    drecreaseQuantity: (state, action) => {
      const item = state.products.find(
        (item) => item.id === action.payload.id
      );
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
      
    },
    deleteItem: (state, action) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload
      );
    
    },
    resetCart: (state) => {
      state.products = [];
     
    },
    getTotals: (state,action)=>{
      let{total,quantity,itemTotal} =  state.products.reduce(
        (accum, curVal)=>{
          const {price,quantity} = curVal;
          const itemTotal = price * quantity;

          accum.total +=itemTotal;
          accum.quantity += quantity;

          return accum

        },
        {
          total:0,
          quantity:0
        }
       );
       state.cartTotalAmount = total;
       state.cartTotalQuantity = quantity;
       state.itemtotal= itemTotal;

    }
  },
});

export const {
  addToCart,
  increaseQuantity,
  drecreaseQuantity,
  deleteItem,
  resetCart,
  getTotals,
  itemtotal,
} = cartSlice.actions;
export default cartSlice.reducer;