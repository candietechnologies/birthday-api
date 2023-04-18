const express = require("express");
const yearController = require("./../controller/year-controller");
const monthController = require("./../controller/month-controller");
const dayController = require("./../controller/days-controller");

const router = express.Router();

router
  .route("/years")
  // .post(yearController.addYear)
  .get(yearController.getAllYears);

router
  .route("/months")
  // .post(monthController.addMonth)
  .get(monthController.getAllMonths);

router.route("/days").post(dayController.addDay).get(dayController.getAllDays);

module.exports = router;
