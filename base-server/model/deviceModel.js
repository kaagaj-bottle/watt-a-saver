const mongoose = require("mongoose");

const deviceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "you should give name to the device"],
    minlength: 3,
    maxlength: 25,
  },
  power: {
    type: Number,
    required: [true, "you should provide power"],
  },
});
const Device = mongoose.model("Device", deviceSchema);
module.exports = Device;
