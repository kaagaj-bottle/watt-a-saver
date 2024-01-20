const express = require("express");
const predictionController = require("../controller/predictionController");

const predictionRouter = express.Router();

predictionRouter.get("/", predictionController.getPrediction);

module.exports = predictionRouter;
