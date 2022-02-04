import jwt from "jsonwebtoken"
import asyncHandler from "express-async-handler"
import User from "../models/userModel.js"

const protect = asyncHandler(async (req, res, next) => {
  let header = req.headers.authorization

  if (header && header.startsWith("Bearer")) {
    let token = header.split(" ")[1]

    let decodedId = jwt.verify(token, process.env.JWT_SECRET)
    try {
      let user = await User.findById(decodedId.id).select("-password")
      console.log(decodedId)
      if (user) {
        console.log("Success")
        req.user = user
        next()
      }
    } catch (error) {
      res.status(401)
      throw new Error("Unauthorized, Invalid token")
    }
  } else {
    res.status(401)
    throw new Error("Unauthorized, No token")
  }
})

export { protect }
