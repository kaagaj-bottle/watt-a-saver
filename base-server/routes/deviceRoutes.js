const express = require("express");
const deviceController = require("../controller/deviceController");

const deviceRouter = express.Router();

deviceRouter.post("/", deviceController.addDevice);
deviceRouter.delete("/:id", deviceController.deleteDevice);
deviceRouter.get("/", deviceController.getAllDevices);
module.exports = deviceRouter;
