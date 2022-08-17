import { Router } from "express";
import movieRentRoutes from "./movieRentRouter";
import movieRoutes from "./movieRouter";
import userRoutes from "./userRouter";

const routes = Router();

routes.get("/", (req, res) => {
  return res.json({ message: "Hello World" });
});

routes.use("/movie", movieRoutes);
routes.use("/users", userRoutes);
routes.get("/erro", (req, res) => {
  throw new Error("teste");
});

export default routes;
