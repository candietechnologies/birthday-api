const Month = require("../model/month-model");
const catchAsync = require("../util/catch-async");
const AppError = require("../util/app-error");

exports.addMonth = catchAsync(async (req, res, next) => {
  const month = await Month.create(req.body);

  return res.status(201).json({
    status: "success",
    month,
  });
});

exports.getAllMonths = catchAsync(async (req, res, next) => {
  const months = await Month.find();

  return res.status(200).json({
    results: months.length,
    months,
  });
});
