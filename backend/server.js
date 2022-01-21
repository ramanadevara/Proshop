const express = require("express")

const products = require("./data/products")

const dontenv = require("dotenv")

dontenv.config()

const PORT = process.env.PORT

const app = express()

app.listen(PORT, console.log(`Server is running on Port ${PORT}`))

app.get("/", (req, res) => {
  res.send("API is running")
})

app.get("/api/products", (req, res) => {
  res.json(products)
})

app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id)
  res.json(product)
})
