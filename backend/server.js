import express from "express"

import dotenv from "dotenv"
import connectDB from "./config/db.js"
import productRouter from "./routes/productRoutes.js"
dotenv.config()
connectDB()

const PORT = process.env.PORT

const app = express()

app.listen(PORT, console.log(`Server is running on Port ${PORT}`))

app.use("/api/products", productRouter)

app.get("/", (req, res) => {
  res.send("API is running")
})
