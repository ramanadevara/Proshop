import {
  CART_ADD_ITEM,
  CART_CLEAR,
  CART_REMOVE_ITEM,
  CART_SAVE_PAYMENT_METHOD,
  CART_SAVE_SHIPPING_ADRESS,
} from "../Constants/cartConstants.js"

export const cartReducer = (
  state = { cartItems: [], shippingAddress: {} },
  action
) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload

      if (state.cartItems != null) {
        const exists = state.cartItems.find((x) => x.product === item.product)

        if (exists) {
          return {
            ...state,
            cartItems: state.cartItems.map((x) =>
              x.product === exists.product ? item : x
            ),
          }
        } else {
          return {
            ...state,
            cartItems: [...state.cartItems, item],
          }
        }
      } else {
        return {
          ...state,
          cartItems: [item],
        }
      }

    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (x) => x.product !== action.payload.id
        ),
      }

    case CART_SAVE_SHIPPING_ADRESS:
      return {
        ...state,
        shippingAddress: action.payload,
      }

    case CART_SAVE_PAYMENT_METHOD:
      return {
        ...state,
        paymentMethod: action.payload,
      }

    case CART_CLEAR:
      return {
        cartItems: [],
      }
    default:
      return state
  }
}
