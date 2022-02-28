import express from "express"
import {
  addOrderItems,
  getOrderById,
  updateOrderToPaid,
} from "../controllers/orderController.js"
import { protect } from "../middleware/authMiddleware.js"

const orderRouter = express.Router()

orderRouter.route("/").post(protect, addOrderItems)

orderRouter.route("/:id").get(getOrderById)

orderRouter.route("/:id/pay").put(protect, updateOrderToPaid)

export default orderRouter
