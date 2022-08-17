
import { prisma } from "../data/prismaClient";
import { AppError } from "../error/customError";
import message from "../error/Messages";
import { CreateMovieRentDTO } from "../model/createMovie";

export class MovieRentBusiness {
  async execute({ movieId, userId }: CreateMovieRentDTO): Promise<void> {
    //verificar se o filmes existe

    try {

    const movieExists = await prisma.movie.findUnique({
     where: {
        id: movieId,
      },
    });

    if (!movieExists) {
      throw new AppError(message.movieDontExist);
    }

    //veirircar s eo filme não está alugado

    const movieAlreadyRented = await prisma.movieRent.findFirst({
      where: {
        movieId,
      },
    });
    if (movieAlreadyRented) {
      throw new AppError(message.movieRent);
    }

    // verificar se o usuário existe

    const userExists = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!userExists) {
      throw new AppError(message.userDontExist);
    }

    // criar a locação
    await prisma.movieRent.create({
      data: {
        movieId,
        userId
      }
    })
    
    } catch (error:any) {
      throw new AppError(error.message, );
    }
  }
}
      