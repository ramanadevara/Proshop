import mongoose from "mongoose"
import { boolean } from "webidl-conversions"
import User from "./userModel"

const orderSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  orderItems: [
    {
      name: {
        type: String,
        required: true,
      },

      quantity: {
        type: String,
        required: true,
      },

      image: {
        type: String,
        required: true,
      },

      price: {
        type: String,
        required: true,
      },

      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
    },
  ],

  shippingAddress: {
    address: {
      type: String,
      required: true,
    },

    city: {
      type: String,
      required: true,
    },

    postalCode: {
      type: Number,
      required: true,
    },

    country: {
      type: String,
      required: true,
    },
  },

  paymentMethod: {
    type: String,
    required: true,
  },

  paymentResult: {
    id: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      required: true,
    },

    updateTime: {
      type: Date,
      required: true,
    },

    emailAddress: {
      type: String,
      required: true,
    },
  },

  taxPrice: {
    type: Number,
    default: 0.0,
  },

  shippingPrice: {
    type: Number,
    default: 0.0,
  },

  totalPrice: {
    type: Number,
  },

  isPaid: {
    type: boolean,
    default: false,
  },

  paidAt: {
    type: Date,
  },

  isDelivered: {
    type: boolean,
    default: false,
  },

  deliveredAt: {
    type: Date,
  },
})

const Order = mongoose.model("Order", orderSchema)

export default Order
