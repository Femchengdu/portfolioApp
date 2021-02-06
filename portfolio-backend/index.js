const config = require("./config");
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

app.listen(config.port, () => {
  console.log(`Express app started at localhost:${config.port}`);
});
