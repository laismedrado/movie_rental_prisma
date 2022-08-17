import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { AppError } from "../error/customError";
import message from "../error/Messages";

export class UserController {
  async createUserController(req: Request, res: Response) {
    console.log("Inicio");
    const userBusiness = new UserBusiness();
    console.log("Classe");
    try {
      const { name, email } = req.body;
      if (!name || !email) {
        throw new AppError(message.missingParameter);
      }

      console.log("CreateUser");
      const result = await userBusiness.createUser({
        name,
        email
      });
      console.log("Result");
      return res.status(200).json(result);
    } catch (error: any) {
      throw new AppError(error.message);
    }
  }

  async getAllUserController(req: Request, res: Response) {
    const userBusiness = new UserBusiness();
    const result = await userBusiness.getUser();
    return res.status(201).json(result);
  }
}
