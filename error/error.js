// class ErrorHandeler extends Error {
//   constructor(message, statusCode) {
//     super(message);
//     this.statusCode = statusCode;
//   }
// }

// export const errorMiddlware = (req, res, err, next) => {
//   err.message = err.message || 'internal server issue';
//   res.statusCode = res.statusCode || 500;
//   return res.status(err.statusCode).json({
//     success: false,
//     message: err.message,
//   });
// };

// export default ErrorHandeler;


class ErrorHandeler extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

const errorMiddlware = (err, req, res, next) => {
  err.message = err.message || 'Internal Server Error';
  err.statusCode = err.statusCode || 500;

  res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};

export default ErrorHandeler;
export { errorMiddlware };
