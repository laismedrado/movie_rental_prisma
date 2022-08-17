import { Router } from "express";
import { UserController } from "../controller/UserController";

const userRoutes = Router();
const userController = new UserController();

userRoutes.post("/", userController.createUserController);
userRoutes.get("/", userController.getAllUserController);

export default userRoutes;
