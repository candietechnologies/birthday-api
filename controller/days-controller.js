const Day = require("../model/day-model");
const catchAsync = require("../util/catch-async");
const AppError = require("../util/app-error");

exports.addDay = catchAsync(async (req, res, next) => {
  const day = await Day.create(req.body);

  return res.status(201).json({
    status: "success",
    day,
  });
});

exports.getAllDays = catchAsync(async (req, res, next) => {
  const days = await Day.find();

  return res.status(200).json({
    results: days.length,
    days,
  });
});
