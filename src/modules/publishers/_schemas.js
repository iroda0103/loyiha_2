const Joi = require("joi");

exports.postPublisherSchema = {
  body: Joi.object({
    name: Joi.string().required(),
    address: Joi.string().required(),
    phone: Joi.number().required(),
  }),
};

exports.getPublisherSchema = {
  query: Joi.object({
    q: Joi.string(),
    page: Joi.object({
      offset: Joi.number().integer(),
      limit: Joi.number().integer().when("offset", {
        is: Joi.exist(),
        then: Joi.required(),
        otherwise: Joi.forbidden(),
      }),
    }),
    sort: Joi.object({
      by: Joi.string().valid("name"),
      order: Joi.string().valid("asc", "desc"),
    }),
    filters: Joi.object({
      is_deleted: Joi.boolean(),
    }),
  }),
};

exports.showPublisherSchema = {
  params: Joi.object({
    id: Joi.string(),
  }),
};

exports.patchPublisherSchema = {
  params: Joi.object({
    id: Joi.string().required(),
  }),
  body: Joi.object({
    name: Joi.string(),
    address: Joi.string(),
    phone: Joi.number(),
  }),
};

exports.deletePublisherSchema = {
  params: Joi.object({
    id: Joi.string(),
  }),
};
