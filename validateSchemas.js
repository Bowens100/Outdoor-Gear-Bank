const Joi = require('joi');
const { required } = require('joi');

module.exports.productSchema = Joi.object({
    name: Joi.string().required(),
    price: Joi.number().required(),
    description: Joi.string().required(),
    image: Joi.string(),
    brand: Joi.string().required(),
    type: Joi.string().required()
})
