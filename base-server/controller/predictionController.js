const catchAsync = require("../utils/catchAsync");
const ApiError = require("../utils/apiError");

exports.getPrediction = catchAsync(async (req, res, next) => {
  const timeStamp = req.body;
  if (!timeStamp)
    return next(
      new ApiError(
        "no timestamp provided,either the user is inactive or something went wrong"
      )
    );

  res.status(200).json({
    status: "success",
    data: "not implemented yet",
  });
});
