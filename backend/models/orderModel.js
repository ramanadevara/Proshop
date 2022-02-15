import mongoose from "mongoose"
import { boolean } from "webidl-conversions"
import User from "./userModel.js"

const orderSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  orderItems: [
    {
      name: {
        type: String,
      },

      qty: {
        type: String,
      },

      image: {
        type: String,
      },

      price: {
        type: String,
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
    },

    status: {
      type: String,
    },

    updateTime: {
      type: Date,
    },

    emailAddress: {
      type: String,
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
    type: Boolean,
    default: false,
  },

  paidAt: {
    type: Date,
  },

  isDelivered: {
    type: Boolean,
    default: false,
  },

  deliveredAt: {
    type: Date,
  },
})

const Order = mongoose.model("Order", orderSchema)

export default Order
