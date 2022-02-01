import express from "express"
import asyncHandler from "express-async-handler"
import {
  getProductById,
  getProducts,
} from "../controllers/productController.js"
import Product from "../models/productModel.js"
const productRouter = express.Router()

productRouter.route("/").get(getProducts)

productRouter.route("/:id").get(getProductById)

export default productRouter
