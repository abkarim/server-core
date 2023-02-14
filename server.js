const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();

const app = require("./app/app");

mongoose.set("strictQuery", true);
mongoose.connect(process.env.mongodb_connection_url, () =>
  console.log("Database connected")
);

const PORT = process.env.port;
app.listen(PORT, () => {
  console.log(`Listening app on ${PORT}`);
});
