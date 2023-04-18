const mongoose = require("mongoose");

const monthSchema = new mongoose.Schema({
  month: {
    type: String,
    unique: [true, "month has to be unique"],
  },
  monthShortened: {
    type: String,
    unique: [true, "month has to be unique"],
  },
  monthIndex: {
    type: Number,
    unique: [true, "month has to be unique"],
  },

  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Month", monthSchema);
