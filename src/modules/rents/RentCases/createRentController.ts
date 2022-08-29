import { Request, Response } from "express";
import { CreateRentCase } from "./createRentCase";



export class CreateRentController {
    async handle (req: Request, res: Response) {
        const {userId,movieId } = req.body 
        const createRentCase = new CreateRentCase()
        await createRentCase.execute ({userId,movieId })
        return res.status(200).send();

    }

}