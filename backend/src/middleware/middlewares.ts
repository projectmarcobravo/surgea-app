import { NextFunction, Request, Response } from "express";
import { Mongoose } from "mongoose";

// export const errorHandler = async (
//   error: any,
//   _: Request,
//   response: Response,
//   _next: NextFunction
// ) => {
//   logMessage(error, LogLevel.error);
//   if (error instanceof Mongoose.) {
//     if (error.code === "P2002") {
//       return response
//         .status(400)
//         .json({ message: `The field "${error.meta?.target}" must be unique.` });
//     }
//     if (error.code === "P2003") {
//       return response.status(400).json({
//         message:
//           "This record cannot be deleted as it is related to other data.",
//       });
//     }
//   }
//   return response
//     .status("statusCode" in error ? (error.statusCode as number) : 500)
//     .json({
//       message:
//         error instanceof AppError ||
//         error.prototype instanceof DomainAppError ||
//         (error?.statusCode && error.statusCode !== 500)
//           ? error.message
//           : "Something unexpected happened. Please try again.",
//     });
// };
