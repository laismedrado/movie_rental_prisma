import {Router} from "express";
import { CreateMovieController } from "../modules/movies/MovieCases/createMovie/createMovieController";

const createMovieController = new CreateMovieController();
const movieRoutes = Router();

movieRoutes.post("/", createMovieController.handle);
 
export { movieRoutes };
