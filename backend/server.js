import express from "express"

import dotenv from "dotenv"
import connectDB from "./config/db.js"
import productRouter from "./routes/productRoutes.js"
import { notFound, errorHandler } from "./middleware/errorMiddleware.js"
import userRouter from "./routes/userRoutes.js"
import orderRouter from "./routes/orderRoutes.js"

dotenv.config()
connectDB()

const PORT = process.env.PORT

const app = express()

app.use(errorHandler)

//app.use(notFound)

app.use(express.json())

app.listen(PORT, console.log(`Server is running on Port ${PORT}`))

app.use("/api/products", productRouter)

app.use("/api/users", userRouter)

app.use("/api/orders", orderRouter)

app.get("/", (req, res) => {
  res.send("API is running")
})

app.get("/api/config/paypal", (req, res) =>
  res.send(process.env.PAYPAL_CLIENT_ID)
)
