import { Request, Response } from "express";
import { CreateMovieCase } from "./CreateMovieCase";


export class CreateMovieController {
    async handle (req: Request, res: Response) {
        const {title,duration,release_dater } = req.body 
        const createMovieCase = new CreateMovieCase()
        const  result = await createMovieCase.execute ({title,duration,release_dater })
        return res.status(201).json(result)

    }

}