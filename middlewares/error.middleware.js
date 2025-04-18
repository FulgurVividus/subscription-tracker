// error - info that happened before the request
// next - what happens after
const errorMiddleware = (err, req, res, next) => {
  try {
    let error = { ...err };
    error.message = err.message;

    console.error(err);

    // the type of error
    // Mongoose bad ObjectId
    if (err.name === "CastError") {
      const message = `Resource not found`;
      error = new Error(message);
      error.statusCode = 404;
    }

    // Mongoose duplicate key
    if (err.code === 11000) {
      const message = `Duplicate field value entered`;
      error = new Error(message);
      error.statusCode = 400;
    }

    // Mongoose validation error
    if (err.name === "ValidationError") {
      const message = Object.values(err.errors).map((val) => val.message);
      error = new Error(message.join(", "));
      error.statusCode = 400;
    }

    // return the response from this middleware
    res
      .status(error.statusCode || 500)
      .json({ success: false, error: error.message || "Server Error" });
  } catch (error) {
    // send this error over the next step, to let us know the error actually happened
    next(error);
  }
};

export default errorMiddleware;
