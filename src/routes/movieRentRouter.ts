import  { Router }  from 'express';
import { MovieRentController } from '../controller/MovieRentController';

const movieRentRoutes = Router();
const movieRentController = new MovieRentController();

movieRentRoutes.post("/rent", movieRentController.handle);

export default movieRentRoutes;