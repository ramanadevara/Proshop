import express from "express"
import authUser from "../controllers/userController.js"

const userRouter = express.Router()

userRouter.route("/login").post(authUser)

export default userRouter
