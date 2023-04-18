const mongoose = require("mongoose");

const yearSchema = new mongoose.Schema({
  year: {
    type: Number,
    unique: [true, "year has to be unique"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Year", yearSchema);
