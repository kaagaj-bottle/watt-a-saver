const Device = require("../model/deviceModel");
const ApiError = require("../utils/apiError");
const catchAsync = require("../utils/catchAsync");

exports.addDevice = catchAsync(async (req, res, next) => {
  const newDevice = await Device.create(req.body);
  if (!newDevice) return next(new ApiError("no devices added", 400));
  res.status(200).json({
    status: "success",
    data: {
      newDevice,
    },
  });
});
exports.deleteDevice = catchAsync(async (req, res, next) => {
  const doc = await Device.findByIdAndDelete(req.params.id);
  if (!doc) return next(new ApiError("no device selected for deletion", 400));
  res.status(204).json({
    status: "success",
    data: {},
  });
});
exports.getAllDevices = catchAsync(async (req, res, next) => {
  const devices = await Device.find();
  if (!devices) return next(new ApiError("no devices found"), 404);
  res.status(200).json({
    status: "success",
    length: `${devices.length}`,
    data: {
      devices,
    },
  });
});
