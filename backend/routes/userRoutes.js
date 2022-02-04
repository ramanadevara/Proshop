import express from "express"
import {
  authUser,
  getUserProfile,
  registerUser,
} from "../controllers/userController.js"
import { protect } from "../middleware/authMiddleware.js"

const userRouter = express.Router()

userRouter.route("/login").post(authUser)

userRouter.route("/profile").get(protect, getUserProfile)

userRouter.route("/").post(registerUser)

export default userRouter
