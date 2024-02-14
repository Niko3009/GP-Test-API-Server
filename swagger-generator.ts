import swaggerAutogen from "swagger-autogen";

const doc = {
  info: {
    title: "My API",
    description: "Description",
  },
  host: "localhost:3005",
};

const outputFile = "./swagger-template.json";
const routes = ["./src/routes.ts"];

swaggerAutogen()(outputFile, routes, doc);
