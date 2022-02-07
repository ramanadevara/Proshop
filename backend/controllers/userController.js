import asyncHandler from "express-async-handler"

import User from "../models/userModel.js"
import generateToken from "../utils/generateToken.js"

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ email: email })

  if (user) {
    const isMatch = await user.matchPassword(password)

    if (isMatch) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user._id),
      })
    } else {
      res.status(401)
      throw new Error("Invalid email or password")
    }
  } else {
    res.status(401)
    throw new Error("Invalid email or password")
  }
})

const getUserProfile = asyncHandler(async (req, res) => {
  const user = req.user

  res.json({
    _id: user._id,
    name: user.name,
    email: user.email,
    isAdmin: user.isAdmin,
  })
})

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body

  const userExists = await User.findOne({ email })

  if (userExists) {
    res.status(400)
    throw new Error("User already exists")
  } else {
    const user = await User.create({
      name,
      email,
      password,
    })

    if (user) {
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user._id),
      })
    } else {
      res.status(400)
      throw new Error("Invalid user data")
    }
  }
})

const testUser = (req, res) => {
  res.json("Success")
}
export { authUser, getUserProfile, registerUser, testUser }
