const dotenv = require("dotenv");
dotenv.config();

const app = require("./app/app");

const port = process.env.port || 3000;

app.listen(port, () => {
  console.log(`Listening app on ${port}`);
});
