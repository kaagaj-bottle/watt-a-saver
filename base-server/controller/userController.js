const User = require("../model/userModel");
const ApiError = require("../utils/apiError");
const catchAsync = require("../utils/catchAsync");
const jwt = require("jsonwebtoken");

exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(new ApiError("enter your email and password", 400));
  }
  const exist = await User.findOne({ email }).select("+password");
  //console.log(exist);

  const correct = await exist.correctPassword(password, exist.password);

  if (!exist || !correct) {
    return next(new ApiError("your email or password doesnot match", 201));
  }
  const token = jwt.sign({ id: exist._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
  const user = await User.findOne({ email });

  res.status(200).json({
    status: "success",
    token,

    data: {
      user,
    },
  });
});
exports.signUp = catchAsync(async (req, res, next) => {
  const newUser = await User.create(req.body);
  if (!newUser)
    return next(
      new ApiError(
        "username or password is missing,please fill it correctly",
        400
      )
    );
  //   const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET_KEY, {
  //     expiresIn: process.env.JWT_EXPIRES_IN,
  //   });
  res.status(200).json({
    status: "success",

    data: {
      newUser,
    },
  });
});
exports.createUser = catchAsync(async (req, res, next) => {
  const newUser = await User.create(req.body);
  if (!newUser) return next(new ApiError("no user created,check again", 400));
  res.status(200).json({
    status: "success",
    data: {
      newUser,
    },
  });
});
exports.getAllUsers = catchAsync(async (req, res, next) => {
  const users = await User.find();
  if (!users) return next(new ApiError("no users found", 400));
  res.status(200).json({
    status: "success",
    length: `${users.length}`,
    data: {
      users,
    },
  });
});
