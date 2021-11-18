import ErrorHandler from "../utils/error-handler";

export default (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  let error = { ...err };

  error.message = err.message;

  // Wrong Mongoose Object ID Error
  if (err.name == "CastError") {
    const message = `Resource not found. Invalid: ${err.path}`;

    error = new ErrorHandler(message, 400);
  }

  // Handling Mongoose validation error
  if (err.name == "ValidatorError") {
    const message = Object.values(err.error).map((value) => value.message);
    error = new ErrorHandler(message, 400);
  }

  res.status(err.statusCode).json({
    success: false,
    error,
    message: error.message,
    stack: error.stack
  });
};
