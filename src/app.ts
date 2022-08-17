import "express-async-errors";
import express, { NextFunction, Request, Response } from "express";
import { AppError } from "./error/customError";
import routes from "./routes";

const app = express();
app.use(express.json());

app.use(routes);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        status: "error",
        message: err.message,
      });
    }
    return response.status(500).json({
      status: "error",
      message: `Internal server error - ${err.message}`,
      details: err.stack,
    });
  }
);

app.listen(3003, () => {
  console.log("Servidor rodando na porta 3003");
});

export default app;
