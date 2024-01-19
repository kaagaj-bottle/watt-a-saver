const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  name: {
    type: String,

    required: [true, "please tell us your name"],
    minlength: 5,
    maxlength: 20,
  },
  email: {
    type: String,
    unique: true,
    required: [true, "provide your email id"],
    validate: [validator.isEmail, "provide valid email"],
  },

  photo: String,
  password: {
    type: String,
    required: [true, "fill your password"],
    minlength: 8,
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: true,
    minlength: 8,
    validate: {
      validator: function (el) {
        return el === this.password;
      },
      message: "passwordconfirm should be same as password",
    },
  },
  //   passwordChangedAt: Date,
  //   resetPasswordToken: String,
  //   resetPasswordExpires: Date,
  //   active: {
  //     type: Boolean,
  //     default: true,
  //     select: false,
  //   },
});
//middlewares...
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 12);
  this.passwordConfirm = undefined;

  next();
});
userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  try {
    return await bcrypt.compare(candidatePassword, userPassword);
  } catch (err) {
    console.log(err);
  }
};
const User = mongoose.model("User", userSchema);
module.exports = User;
