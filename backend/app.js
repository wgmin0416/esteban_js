const express = require("express");
const app = express();
const api = require("./routers");

// swagger
const swaggerUi = require("swagger-ui-express");
const yamljs = require("yamljs");
const path = require("path");
const swaggerSpec = yamljs.load(path.join(__dirname, "./swagger/openapi.yaml"));
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use("/api", api);

module.exports = app;
