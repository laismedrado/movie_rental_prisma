import  { Router }  from 'express';
import { MovieController } from '../controller/MovieController';
import movieRentRoutes from './movieRentRouter';

const movieRoutes = Router();
const movieController = new MovieController();

movieRoutes.post("/", movieController.createMovieController);
movieRoutes.get ("/release", movieController.getMovieController)

movieRoutes.use ("/rent", movieRentRoutes)

export default movieRoutes;
