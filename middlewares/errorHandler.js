const CustomError = require("../helpers/CustomError");

module.exports = (err, req, res, next) => {
  console.error(err.stack);

  if (err instanceof CustomError) {
    return res.status(err.statusCode).json({ error: err.message });
  }

  res.status(500).json({ error: "Something went wrong" });
};
