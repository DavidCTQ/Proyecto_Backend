import swaggerJSDoc, { Options } from "swagger-jsdoc";

const swaggerOptions: Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Backend Service API",
      version: "Alpha",
      description: "API para Catálogo de Esclavos de Primera Categoría"
    },
    servers: [
      {
        url: "http://localhost:3000/"
      }
    ]
  },
  apis: [
    "./src/routes/slavesRoutes.ts",
  ]
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

export default swaggerSpec;