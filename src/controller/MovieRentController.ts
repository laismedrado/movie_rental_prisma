import { Request,Response } from "express";
import { MovieRentBusiness} from "../business/MovieRentBusiness";
import { AppError } from "../error/customError";
import message from "../error/Messages";

export class MovieRentController {
    async handle (req: Request, res: Response) {
       const movieRentBusiness = new MovieRentBusiness();
       try {
       const {movieId, userId} = req.body;
       if (!movieId || !userId) {
           throw new AppError(message.missingParameter);
       }
       const result = await movieRentBusiness.execute ({
                movieId,
                userId

                
         });
        return  res.status(201).send(result)
     }
         catch (error:any) {
               throw new AppError(error.message);
            }


}
}

