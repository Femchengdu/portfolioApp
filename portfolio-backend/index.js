const config = {
  port: 2888,
};
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = new express();
// Application level middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
// Server the react files
app.use(express.static(`${__dirname}/client/build`));
// My custom application level middleware
app.use((req, res, next) => {
  console.log("{^_^}/ Testing the app level middleware");
  next();
});

app.get("/test_server", (req, res) => {
  res.send(
    JSON.stringify({
      test: "Server",
      is: "ready to serve!!!!",
    })
  );
});

// Handles any requests that don't match the ones above
app.get("*", (req, res) => {
  res.sendFile(`${__dirname}/client/build/index.html`);
});

app.listen(config.port, () => {
  console.log(`Express app started at localhost:${config.port}`);
});
