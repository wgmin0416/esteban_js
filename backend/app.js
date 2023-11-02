const express = require("express");
const app = express();

const { swaggerUi, specs } = require("./swagger/swagger");
const api = require("./routers");
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
app.use("/api", api);

module.exports = app;