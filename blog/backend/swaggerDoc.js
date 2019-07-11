const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerValidator = require('swagger-express-validator');

const options = {
  swaggerDefinition: {
    info: {
      title: 'Test API',
      version: '1.0.0',
      description: 'Test Express API with auto-generated swagger docs',
    },
    basePath: '/',
    openapi: "3.0.0",
},
  apis: ['./backend/endpoints.js'],
};

const specs = swaggerJsdoc(options);
console.log(specs)
const validationOptions = {
  schema: specs,
  returnRequestErrors: true,
  returnResponseErrors: true,
  validateRequest: true,
  validateResponse: true,
  requestValidationFn: (req, data, errors) => {
    console.log(`failed request validation: ${req.method} ${req.originalUrl}\n ${util.inspect(errors)}`)
  },
  responseValidationFn: (req, data, errors) => {
    console.log(`failed response validation: ${req.method} ${req.originalUrl}\n ${util.inspect(errors)}`)
  },
}
module.exports = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
  app.use(swaggerValidator(validationOptions));
}
