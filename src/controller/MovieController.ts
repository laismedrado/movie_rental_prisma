import { Request,Response } from "express";
import { MovieBusiness} from "../business/MovieBusiness";
import { AppError } from "../error/customError";
import message from "../error/Messages";

export class MovieController {
 async  createMovieController (req: Request, res: Response){
     const movieBusiness = new MovieBusiness();

     try {
         const {title, duration,release_dater} = req.body;

       if(!title || !duration || !release_dater){
              throw new AppError(message.missingParameter);

       }
       
       const result = await movieBusiness.createMovie({
                title,
                duration,
                release_dater

         });
        return  res.status(200).json(result);
     }
        catch (error:any) {
            throw new AppError(error.message);
        }
    }

async getMovieController  (req: Request, res: Response)  {
    const movieBusiness = new MovieBusiness();
    const result = await movieBusiness.getAllMovie();
    return  res.status(201).json(result)

}
}
  