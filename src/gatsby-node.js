exports.pluginOptionsSchema = ({ Joi }) => {
  return Joi.object({
    code: Joi.string().required().description(`CookieHub domain code.`),
    debug: Joi.boolean()
      .description(
        `A value indicating whether run CookieHub in debug/development mode.`
      )
      .default(false),
    cookie: Joi.string()
      .description(`The prefix of the cookie name.`)
      .default("pittica-cookiehub"),
  });
};
