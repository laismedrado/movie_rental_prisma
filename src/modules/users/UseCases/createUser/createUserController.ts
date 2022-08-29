import { Request, Response  } from "express";
import { CreateUserCase } from "./createUserCase";


export class CreateUserController {
    async handle (req: Request, res: Response) {
        const {name,email } = req.body 
        const createUserCase = new CreateUserCase()
        const  result = await createUserCase.execute ({name,email })
        return res.status(201).json(result)

    }

}

