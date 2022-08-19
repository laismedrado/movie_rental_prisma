import {Router} from "express";
import { CreateRentController } from "../modules/rents/RentCases/createRentController";

const createRentController = new CreateRentController();
const rentRoutes = Router();

rentRoutes.post("/",createRentController .handle);
 
export { rentRoutes };
