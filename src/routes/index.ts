import {Router} from 'express';
import { userRoutes} from './user.routes';
import { movieRoutes } from './movie.routes';
import { rentRoutes } from './rents.routes';
const routes = Router();
routes.use ('/users', userRoutes);
routes.use ('/movies', movieRoutes);
routes.use ('/rents', rentRoutes);
export {routes};


