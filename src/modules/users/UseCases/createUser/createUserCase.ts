import { User_client } from "@prisma/client";
import { AppError } from "../../../../erros/AppErrors";
import { prisma } from "../../../../prisma/client";
import { CreateUserDTO } from "../../DTO/createUserDto";

export class CreateUserCase {
  async execute({ name, email }: CreateUserDTO): Promise<User_client> {
    const userAlreadyExists = await prisma.user_client.findUnique({
      where: {
        email,
      },
    });

    if (userAlreadyExists) {
      throw new AppError("User already exists");
    }

    const user = await prisma.user_client.create({
      data: {
        name,
        email,
      },
    });

    return user;
  }
}
