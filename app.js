const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const helmet = require("helmet");
const hpp = require("hpp");
const xss = require("xss-clean");
// const rateLimit = require("express-rate-limit");

const globalErrorController = require("./controller/error-controller");
const AppError = require("./util/app-error");

// routers
const birthdayRouter = require("./router/year-router");

dotenv.config();

const app = express();

const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  // res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");

  next();
});

app.use(bodyParser.json());
app.use(express.json());
app.use(hpp());
app.use(helmet());
app.use(xss());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("<h1>welcome to candie birthday free API</h1>");
});

app.use("/api/v1/", birthdayRouter);

app.all("*", (req, res, next) => {
  return next(new AppError(`Can't find ${req.originalUrl} on this server`));
});

app.use(globalErrorController);

module.exports = app;
