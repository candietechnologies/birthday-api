const Year = require("../model/year-model");
const catchAsync = require("../util/catch-async");
const AppError = require("../util/app-error");

exports.addYear = catchAsync(async (req, res, next) => {
  const year = await Year.create(req.body);

  return res.status(201).json({
    status: "success",
    year,
  });
});

exports.getAllYears = catchAsync(async (req, res, next) => {
  const years = await Year.find();

  return res.status(200).json({
    results: years.length,
    years,
  });
});
