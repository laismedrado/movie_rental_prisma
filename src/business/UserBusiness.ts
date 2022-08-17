import { User } from "@prisma/client";
import { prisma } from "../data/prismaClient";
import { AppError } from "../error/customError";
import message from "../error/Messages";
import { CreateUserDTO } from "../model/user";

export class UserBusiness {
  async createUser({ name, email }: CreateUserDTO): Promise<User> {
    console.log("controlerinicio");
    //verificar se o usuário já existe
    try {
      const userAlreadyExists = await prisma.user.findUnique({
        where: {
          email,
        },
      });
      console.log(userAlreadyExists,"controlermeioo");
      if (userAlreadyExists) {
        throw new AppError(message.userExist);
      }

      const user = await prisma.user.create({
       data: {
          name,
          email
        },
      });

      return user;
    } catch (error: any) {
      throw new AppError(error.message);
    }
  }

  // pegar todos os usuarios
  async getUser() {
    const users = await prisma.user.findMany({
      include: {
        movie_rent: {
          select: {
            movie: {
              select: {
                title: true,
              },
            },
          },
        },
      },
    });
    return users;
  }
}
