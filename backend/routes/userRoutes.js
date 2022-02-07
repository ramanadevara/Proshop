import express from "express"
import {
  authUser,
  getUserProfile,
  registerUser,
  testUser,
} from "../controllers/userController.js"
import { protect } from "../middleware/authMiddleware.js"

const userRouter = express.Router()

userRouter.route("/login").post(authUser)

userRouter.route("/profile").get(protect, getUserProfile)

userRouter.route("/").post(registerUser)

userRouter.route("/test").get(testUser)

export default userRouter
