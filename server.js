const app = require("./app");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const db = process.env.DATABASE;

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("database connection successful"));

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`app running on port ${port}`);
});
