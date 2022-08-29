

import { AppError } from "../../../erros/AppErrors";
import { prisma } from "../../../prisma/client";
import { CreateMovieRentDTO } from "../DTO/createRentsDto";




export class CreateRentCase {
  async execute({ movieId, userId }: CreateMovieRentDTO): Promise<void> {
    //verificar se o filmes existe

    try {

    const movieExists = await prisma.movie.findUnique({
     where: {
        id: movieId,
      },
    });

    if (!movieExists) {
      throw new AppError("Movie not found");
    }

    //veirircar s eo filme não está alugado

    const movieAlreadyRented = await prisma.movieRent.findFirst({
      where: {
        movieId,
      },
    });
    if (movieAlreadyRented) {
      throw new AppError("Movie already rented");
    }

    // verificar se o usuário existe

    const userExists = await prisma.user_client.findUnique({
      where: {
        id: userId,
      },
    });

    if (!userExists) {
      throw new AppError("User not found");
    }

    // criar a locação
    const createRent =await prisma.movieRent.create({
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
      