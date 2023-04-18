const mongoose = require("mongoose");

const daySchema = new mongoose.Schema({
  day: {
    type: Number,
    unique: [true, "day has to be unique"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Day", daySchema);
