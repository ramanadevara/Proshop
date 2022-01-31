import { CART_ADD_ITEM } from "../Constants/cartConstants.js"

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload
      const exists = state.cartItems.find((x) => x.product === item.product)

      if (exists) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) => {
            x.product === item.product ? item : x
          }),
        }
      } else {
        return {
          ...state,
          cartItems: state.cartItems,
        }
      }

    default:
      return state
  }
}
