import { Movie } from "@prisma/client";
import { prisma } from "../data/prismaClient";
import { AppError } from "../error/customError";
import message from "../error/Messages";
import { CreateMovieDTO } from "../model/movie";

export class MovieBusiness {
 async createMovie  ({
    title,
    duration,
    release_dater,
  }: CreateMovieDTO): Promise<Movie> {
    //verificar se o usuário já existe

    try {
    const movieAlreadyExists = await prisma.movie.findUnique({
      where: {
        title,
      },
    });

    if (movieAlreadyExists) {
      throw new AppError(message.movieAlreadyExist);
    }

    const movie = await prisma.movie.create({
      data: {
        title,
        duration,
        release_dater,
      },
    });

    return movie;
  }
  catch (error:any) {
    throw new AppError(error.message);
  }
}


  //ordenar por data de realise
 async getAllMovie  (): Promise<Movie[]> {
    const movies = await prisma.movie.findMany({
      orderBy: {
        release_dater: "desc",
      },
      include: {
        movie_rent: {
          select: {
            user: {
              select: {
                name: true,
                email: true,
              },
            },
          },
        },
      },
    });

    return movies;
  };
}