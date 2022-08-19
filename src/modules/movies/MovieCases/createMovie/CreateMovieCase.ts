import { Movie } from "@prisma/client";
import { CreateMovieDTO } from "../../DTO/createMovieDTO";
import { AppError } from "../../../../erros/AppErrors";
import { prisma } from "../../../../prisma/client";

export class CreateMovieCase {
  async execute({
    title,
    duration,
    release_dater,
  }: CreateMovieDTO): Promise<Movie> {
    const movieAlreadyExist = await prisma.movie.findUnique({
      where: {
        title,
      },
    });

    if (movieAlreadyExist) {
      throw new AppError("User already exists");
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
}
