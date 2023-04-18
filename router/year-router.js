const express = require("express");
const yearController = require("./../controller/year-controller");
const monthController = require("./../controller/month-controller");
const dayController = require("./../controller/days-controller");

const router = express.Router();

router.route("/years").get(yearController.getAllYears);

router.route("/months").get(monthController.getAllMonths);

router.route("/days").get(dayController.getAllDays);

module.exports = router;
