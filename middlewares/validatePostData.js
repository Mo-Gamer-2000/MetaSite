const Joi = require("joi");

const validatePostData = (req, res, next) => {
  const schema = Joi.object({
    title: Joi.string().min(3).required(),
    caption: Joi.string().min(10).required(),
    image: Joi.string().uri().required(),
    content: Joi.string().min(20).required(),
  });

  const { error } = schema.validate(req.body);
  if (error) return res.status(400).json({ msg: error.details[0].message });
  next();
};

module.exports = validatePostData;
