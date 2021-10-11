import * as actionTypes from '../constants/cartContants';

export const cartReducer = (state = { cartItems: []}, action) => {
  switch(action.type){
    case actionTypes.ADD_TO_CART:
      const item = action.payload;

      const itemExist = state.cartItems.find((element) => element.product === item.product);
      if(itemExist){
        return {
          ...state,
          cartItems: state.cartItems.map((element) => element.product === itemExist.product ? item : element)
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((element) => element.product !== action.payload)
      }
    default:
      return state;
  }
}