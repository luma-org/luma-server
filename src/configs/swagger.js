import swaggerAutogen from 'swagger-autogen';

const doc = {
  info: {
    title: 'Luma - Server',
    description: 'Backend API for Luma Platform',

  },
  schemes: ['http', 'https'],
  host: process.env.HOST
};

const outputFile = './swagger-output.json';
const routes = ['../../server.js'];

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen(outputFile, routes, doc);