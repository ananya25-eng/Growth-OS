export default function errorHandler(error, _req, res, _next) {
  let status = error.statusCode || error.status || 500;
  let message = error.message || "Something went wrong.";

  if (error.name === "ValidationError") {
    status = 400;
    message = Object.values(error.errors).map((item) => item.message).join(" ");
  } else if (error.name === "CastError") {
    status = 400;
    message = "Invalid ID format.";
  } else if (error.code === 11000) {
    status = 409;
    const field = Object.keys(error.keyPattern || {})[0] || "value";
    message = `A record with this ${field} already exists.`;
  }

  if (process.env.NODE_ENV !== "production") console.error(error);
  res.status(status).json({
    success: false,
    message,
    ...(process.env.NODE_ENV !== "production" ? { stack: error.stack } : {})
  });
}
