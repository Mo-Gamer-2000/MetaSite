const Joi = require("joi");

const validateCommentData = (req, res, next) => {
  const schema = Joi.object({
    content: Joi.string().required().min(1).max(1000),
  });

  const { error } = schema.validate(req.body);
  if (error) return res.status(400).json({ msg: error.details[0].message });
  next();
};

module.exports = validateCommentData;
